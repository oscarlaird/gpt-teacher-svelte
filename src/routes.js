// routes.js
// TESTS
import FlashcardTest from './FlashcardTest.svelte';
import FlashcardReviewTest from './FlashcardReviewTest.svelte';
import MCQuestionTest from './MCQuestionTest.svelte';
import QuizTest from './QuizTest.svelte';
import TestTest from './TestTest.svelte';
import ArticleTest from './ArticleTest.svelte';
import TopicTileTest from './TopicTileTest.svelte';
import TopicChooserTest from './TopicChooserTest.svelte';
// CORE
import Home from './Home.svelte';
import SignIn from './SignIn.svelte';
import Chooser from './Chooser.svelte';
import Article from './Article.svelte';
import Quiz from './Quiz.svelte';
import FlashcardReview from './FlashcardReview.svelte';
import NotFound from './NotFound.svelte';

export default {
	// CORE
	'/': Home,
	'/home': Home,
	'/signin': SignIn,
	'/article/:unit_id/:topic_id': Article,
	'/quiz/:unit_id/:topic_id': Quiz,
	'/flashcards/:unit_id/:topic_id': FlashcardReview,
	'/choose/:activity_type': Chooser,
	// '/topic/:id': TopicPage,
	// '/quiz/:id': QuizPage,
	// TEST
	'/test_components/flashcard': FlashcardTest,
	'/test_components/flashcard_review': FlashcardReviewTest,
	'/test_components/mc': MCQuestionTest,
	'/test_components/quiz': QuizTest,
	'/test_components/article': ArticleTest,
	'/test_components/topic_tile': TopicTileTest,
	'/test_components/topic_chooser': TopicChooserTest,
	// not found
	'*': NotFound,
}
