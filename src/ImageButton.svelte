<!-- ImageButton.svelte -->
<script>
  import './global.css';
  import { chosenSubject, flash } from './stores.js';
  $: if ($flash) {
	  setTimeout(() => {
		  flash.set(false);
	  }, 200);
  }
  export let background_image;
  export let text;
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher()
</script>

<div
  on:click={() => dispatch('click')}
  class={!$flash ? "topic-tile" : "topic-tile flash"}
  style={`background-image: url(/images/${$chosenSubject.short_name}/${background_image})`} >
  <h2>{text}</h2>
</div>


<style>
  .topic-tile {
    overflow: hidden;
    border: 1px solid var(--primary-color);
    cursor: pointer;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    transition: box-shadow 100ms ease-out;
  }
  .topic-tile.flash {
    box-shadow: 0 0 10px 5px var(--primary-color);
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
    box-shadow:  5px 10px 4px rgba(0, 0, 0, 0.4);
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

