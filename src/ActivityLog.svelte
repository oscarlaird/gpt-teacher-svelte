<script>
  import { activities } from './activities_api.js';
  $: reversed_activities = [...$activities].reverse();
  function floatToPercent(value) {
    return `${(value * 100).toFixed(0)}%`;
  }
  function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
  
    let timeString = '';
    if (hours > 0) {
      timeString += hours + ':';
    }
    timeString += (minutes < 10 ? '0' : '') + minutes + ':';
    timeString += (secs < 10 ? '0' : '') + secs;
  
    return timeString;
  }

</script>

<table>
  <thead>
    <tr>
      <th></th>
      <th></th>
      <th>Unit</th>
      <th>Topic</th>
      <th>Time</th>
      <th>Accuracy</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    {#each reversed_activities as activity (activity.id)}
      <tr>
	      <td>{activity.date}</td>
	      <td>{activity.activity_type}</td>
	      <td>{activity.unit===-1 ?  'ALL': activity.unit }</td>
	      <td>{activity.topic===-1 ? 'ALL': activity.topic}</td>
	      <td>{formatTime(activity.time)}</td>
	      <td>{activity.activity_type==='quiz' ? floatToPercent(activity.accuracy) : ''}</td>
	      <td>+{activity.score}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    font-size: 1rem;
  }

  th,
  td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
</style>

