<script>
  export let topic;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher()
  function onClick() {
	  dispatch('choose', {topic: topic})
  }
</script>

<div
  on:click={onClick}
  class="topic-tile"
  style={`background-image: url(/images/apush/${topic.image_name})`}
>
  <h2>{topic.name}</h2>
</div>


<style>
  .topic-tile {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    border: 1px solid #000;
    cursor: pointer;
  }

  .topic-tile h2 {
    margin: 0;
    padding: 20px;
    color: #000;
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 28px;
    background-size: cover;
    background-position: center;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .topic-tile h2:hover {
	  background-color: rgba(255, 255, 255, 0.2);
  }
</style>

