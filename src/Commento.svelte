<script>
  import { onMount, onDestroy } from 'svelte';
  import { chosenSubject } from './stores.js';
  import './global.css';

  let commentoScript;

  onMount(() => {
    commentoScript = document.createElement('script');
    commentoScript.defer = true;
    commentoScript.src = 'https://cdn.commento.io/js/commento.js';
    commentoScript.setAttribute('data-page-id', $chosenSubject.short_name);
    document.head.appendChild(commentoScript);
  });

  onDestroy(() => {
    if (commentoScript) {
	    document.head.removeChild(commentoScript);
    }
  });

  // $: commentoScript.setAttribute('data-page-id', $chosenSubject.short_name);

</script>

<h3>Suggestion Forum / Error Reporting</h3>
<div id="commento"></div>

