<!-- App.svelte -->
<script>
	import { chosenSubject } from './stores.js';
	import Router from 'svelte-spa-router'
	import routes from './routes'
	$: if ($chosenSubject) {
		document.documentElement.style.setProperty('--primary-color', $chosenSubject.primaryColor);
		document.documentElement.style.setProperty('--secondary-color', $chosenSubject.secondaryColor);
	};
</script>

<Router {routes} />
