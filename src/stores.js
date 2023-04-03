import { writable, derived } from 'svelte/store';
import { subjects } from './subjects.js';


function syncWithLocalStorage(key, initialValue) {
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;
  const store = writable(parsedValue);

  store.subscribe(($value) => {
    localStorage.setItem(key, JSON.stringify($value));
  });

  return store;
}

const chosenSubjectId = syncWithLocalStorage('chosenSubjectId', 1);
const chosenTopic = syncWithLocalStorage('chosenTopic', 17);
const chosenUnit =  syncWithLocalStorage('chosenUnit',   3); // only for activity logging
const flash = writable(false); // if the user repeatedly hits a topic tile then
                               // the activity buttons should flash.
const chosenSubject = derived(chosenSubjectId, ($chosenSubjectId) => {
	return subjects.find(s => s.id===$chosenSubjectId);
});



export { subjects, chosenSubjectId, chosenSubject, chosenUnit, chosenTopic, flash }
