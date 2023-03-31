import { writable } from 'svelte/store';

const chosenTopic = writable(17);
const chosenUnit = writable(3); // only for activity logging


export { chosenUnit, chosenTopic }
