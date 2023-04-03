<!-- ActivityLogger.svelte -->
<script>
  import { appendActivity }  from './activities_api.js';
  import { onDestroy } from 'svelte';

  export let activity_type;
  export let accuracy = 0;
  export let score = null;

  export let params = {};
  const uid = parseInt(params.unit_id);
  const tid = parseInt(params.topic_id);
  const startTime = Date.now();

  function addActivity() {
    const endTime = Date.now();
    const time = Math.floor((endTime - startTime) / 1000);
    const today = new Date().toISOString().slice(0, 10);
    if (score===null) {
	    if (activity_type==='cards') {
		    score = Math.min(60, Math.floor(time/3));
	    } else if (activity_type==='article') {
		    score = Math.min(60, Math.floor(time/2));
	    };
    };
    const activity = {
      date: today,  // today's date YYYY-MM-DD
      activity_type: activity_type, // activity type
      unit: uid,
      topic: tid,
      time: time,  // elapsed time
      accuracy: accuracy,  // accuracy (only pertains to quizzes)
      score: score,    // score
    };
    console.log(JSON.stringify(activity));
    appendActivity(activity).catch((error) => {
      console.error('Error adding article activity:', error);
    });
  }
  
  onDestroy(() => {
    addActivity();
  });
 
</script>
