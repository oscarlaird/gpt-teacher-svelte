// import TopicPage from './TopicPage.svelte';
// import TP2 from './TP2.svelte';
// import Home from './Home.svelte';
import NotFound from './NotFound.svelte';
// import QuizPage from './QuizPage.svelte';
import FlashcardTest from './FlashcardTest.svelte';
import FlashcardReviewTest from './FlashcardReviewTest.svelte';
import MCQuestionTest from './MCQuestionTest.svelte';
import QuizTest from './QuizTest.svelte';
import TestTest from './TestTest.svelte';
import ArticleTest from './ArticleTest.svelte';
import TopicTileTest from './TopicTileTest.svelte';
import TopicChooserTest from './TopicChooserTest.svelte';
import LoginButtonTest from './LoginButtonTest.svelte';
import Home from './Home.svelte';

export default {
	// exact path
	'/': Home,
	'/home': Home,
	// '/topic/:id': TopicPage,
	// '/quiz/:id': QuizPage,
	'/test_components/flashcard': FlashcardTest,
	'/test_components/flashcard_review': FlashcardReviewTest,
	'/test_components/mc': MCQuestionTest,
	'/test_components/quiz': QuizTest,
	'/test_components/article': ArticleTest,
	// '/test_components/test': TestTest,
	'/test_components/topic_tile': TopicTileTest,
	'/test_components/topic_chooser': TopicChooserTest,
	'/test_components/login_button': LoginButtonTest,
	'*': NotFound,
}
