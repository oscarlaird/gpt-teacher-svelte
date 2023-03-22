import TopicPage from './TopicPage.svelte';
import TP2 from './TP2.svelte';
import Home from './Home.svelte';
import NotFound from './NotFound.svelte';
import QuizPage from './QuizPage.svelte';

export default {
	// exact path
	'/': Home,
	'/topic/:id': TopicPage,
	'/quiz/:id': QuizPage,
	'*': NotFound,

}
