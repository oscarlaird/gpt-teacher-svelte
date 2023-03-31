<!-- TopicTile.svelte -->
<script>
  import './global.css';
  export let topic;
  export let chosen_tid;
  function onClick() {
	  chosen_tid = topic.id;
  }
</script>

<div
  on:click={onClick}
  title={topic.image_name}
  class={topic.id===chosen_tid ? 'topic-tile selected' : 'topic-tile'}
  style={`background-image: url(/images/apush/${topic.image_name})`}
>
<div class='inner'>{topic.name}</div>
</div>


<style>
  .topic-tile {
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid var(--secondary-color);
    cursor: pointer;
    background-size: cover;
    background-position: center;
  }
  .topic-tile.selected {
	  box-shadow: 0 0 10px 5px var(--secondary-color);
  }

  .topic-tile .inner {
    user-select: none;
    height: 100%;
    margin: 0;
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px;
    color: black;
    background-color: rgba(255, 255, 255, 0.6);
    text-shadow: 0 0 5px rgba(255, 255, 255, 1.0), /* Horizontal, Vertical, Blur, Color */
               0 0 8px rgba(255, 255, 255, 1.0);
  }
  @media screen and (min-width: 800px) {
	  .topic-tile:not(.selected):hover {
		  box-shadow: 0 0 10px 5px var(--primary-color);
	  }
  }
</style>

