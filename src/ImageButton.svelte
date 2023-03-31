<!-- ImageButton.svelte -->
<script>
  import './global.css';
  export let background_image;
  export let text;
  export let dest;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher()
</script>

<div
  on:click={() => dispatch('click')}
  class="topic-tile"
  style={`background-image: url(/images/apush/${background_image})`} >
  <h2>{text}</h2>
</div>


<style>
  .topic-tile {
    overflow: hidden;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    background-size: cover;
    background-position: center;
  }

  .topic-tile h2 {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 1.3rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
  text-shadow: 0 0 5px rgba(255, 255, 255, 1.0), /* Horizontal, Vertical, Blur, Color */
               0 0 8px rgba(255, 255, 255, 1.0);
  }
  .topic-tile h2:hover {
	  background-color: rgba(0, 0, 0, 0.6);
	  color: white;
  text-shadow: 0 0 5px rgba(0, 0, 0, 1.0), /* Horizontal, Vertical, Blur, Color */
             0 0 8px rgba(0, 0, 0, 1.0);

  }
</style>

