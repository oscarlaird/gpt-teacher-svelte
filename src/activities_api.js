// activities_api.js
import { writable } from 'svelte/store';
import { get, ref, child, set, onValue, push } from 'firebase/database';
import { auth, database } from './firebaseApp.js';

export const activities = writable([])

function validate_activity(activity) {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const allowedActivities = ['quiz', 'cards', 'article'];

  return (
    typeof activity.date === 'string' &&
    dateRegex.test(activity.date) &&
    typeof activity.activity_type === 'string' &&
    allowedActivities.includes(activity.activity_type) &&
    typeof activity.unit === 'number' &&
    typeof activity.topic === 'number' &&
    typeof activity.time === 'number' &&
    Number.isInteger(activity.time) &&
    typeof activity.accuracy === 'number' &&
    activity.accuracy >= 0 &&
    activity.accuracy <= 1 &&
    typeof activity.score === 'number' &&
    Number.isInteger(activity.score)
  );
}

export async function appendActivity(activity) {
  const user = auth.currentUser;
  if (user) {
    const activitiesRef = ref(database, `users/${user.uid}/activities`);
    await push(activitiesRef, activity);
  } else {
    throw new Error('User not authenticated');
  }
}


auth.onAuthStateChanged((user) => {
  if (user) {
    const activitiesRef = ref(database, `users/${user.uid}/activities`);
    onValue(activitiesRef, (snapshot) => {
      const activitiesData = snapshot.val();
      const activitiesArray = activitiesData ? Object.entries(activitiesData).map(([id, activity]) => ({ id, ...activity })) : [];
      activities.set(activitiesArray);
    });
  } else {
    activities.set([]);
  }
});
