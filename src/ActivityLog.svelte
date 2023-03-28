<!-- ActivityLog.svelte -->
<script>
  export let activities;
</script>

<div class="activity-log">
  {#each activities as activity}
    <div class="activity">
      {activity.date}: {activity.thing} | {activity.unit} | {activity.topic} | {activity.time} | {activity.accuracy} | {activity.score}
    </div>
  {/each}
</div>

<style>
  .activity-log {
    max-width: 1000px;
    margin: 0 auto;
  }
  .activity {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
  }
</style>

