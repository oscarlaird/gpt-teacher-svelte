<script>
  import { push } from 'svelte-spa-router';
  export let topic;

  const handleClick = () => {
    push(`/topic/${topic.id}`);
  };
</script>

<div
  class="topic-tile"
  on:click={handleClick}
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
</style>

