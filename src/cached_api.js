// cached_api.js
import { chosenSubject } from './stores.js';
import { writable, derived } from 'svelte/store';

// subscribe and immediately unsubscribe from a store
function initStore(store) {
	const unsubscribe = store.subscribe(() => {});
	unsubscribe();
}

function createResourceStore(resourcePath, dependsOn, default_val) {
  return derived(
    dependsOn, // store on which the derived store depends/reacts
    async ($dependsOn, set) => { // async func to fetch new value of derived store
      if ($dependsOn) {
        try {
          const response = await fetch(`cached_api/${$dependsOn.short_name}/${resourcePath}.json`);
          if (response.ok) {
            const data = await response.json();
  	  console.log('setting store: ', data.rows);
            set(data.rows);
          } else {
            console.error(`Failed to fetch ${resourcePath}:`, response.statusText);
            set([]);
          }
        } catch (error) {
          console.error(`Error fetching ${resourcePath}:`, error);
          set([]);
        }
      } else {
        set([]);
      }
    },
    default_val); // derived's third argument is the initial value
}

// Using the createResourceStore function for topics, units, cards, and mc
const topics = createResourceStore('topics', chosenSubject, []);
const units = createResourceStore('units', chosenSubject, []);
const cards = createResourceStore('cards', chosenSubject, []);
const mc = createResourceStore('mc', chosenSubject, []);
// normally stores are only initialized when they get their first
// subscriber. So we subscribe to all of them here and immediately
// unsubscribe.
initStore(topics)
initStore(units)
initStore(cards)
initStore(mc)

export { units, topics, cards, mc }
