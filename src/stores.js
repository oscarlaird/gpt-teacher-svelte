import { writable } from 'svelte/store';

const chosenTopic = writable(null);
const chosenUnit = writable(null); // only for activity logging


export { chosenTopic }
