<script>
  import { activities } from './activities_api.js';
  $: reversed_activities = [...$activities].reverse().slice(0,10);
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

<h3> Total Score: {$activities.reduce((accumulator, current) => accumulator+current.score, 0)} </h3>
<h3> Quiz High Score: {$activities.reduce((highest, current) => current.score > highest && current.activity_type==='quiz' ? current.score : highest, 0)} </h3>

<table>
  <thead>
    <tr>
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
    font-size: 0.5rem;
  }

  @media (min-width: 800px) {
	  table {
		  font-size: 1rem;
	  }
  }

  th,
  td {
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

