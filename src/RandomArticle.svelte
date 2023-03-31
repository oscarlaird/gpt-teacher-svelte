<script>
	import { replace } from 'svelte-spa-router';
	import { units, topics } from './cached_api.js';
	function getRandom(arr) {
	  const randomIndex = Math.floor(Math.random() * arr.length);
	  return arr[randomIndex];
	}

	export let params = {};
	let uid = parseInt(params.unit_id)===-1 ?
		  getRandom(units).id :
		  parseInt(params.unit_id);
	let tid = getRandom(topics.filter(t => t.unit_id===uid)).id;
	replace(`/article/${uid}/${tid}`)

</script>
