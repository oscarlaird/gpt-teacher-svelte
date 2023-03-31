<!-- src/Article.svelte -->
<script>
  import './global.css';
  import ActivityButtons from './ActivityButtons.svelte';
  import ActivityLogger from './ActivityLogger.svelte';
  import { topics } from './cached_api.js';
  export let params = {}; // filled in from the url

  console.log(JSON.stringify(params))
  $: topic = topics.find(t => t.id === parseInt(params.topic_id))
  $: console.log('topics: ', topics)
  $: console.log('topic: ', topic)
  
</script>

<style>
  .article-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 50px;
    margin-bottom: 1rem;
    border: 3px solid black;
  }

  .overview {
    font-size: 1.4rem;
    line-height: 1.7;
    margin-bottom: 80px;
  }
  .overview b {
	  color: var(--secondary-color);
  }
  h1 {
	  color: var(--primary-color);
  }
</style>

<ActivityButtons hideArticle={true} params={params} {topic} />

<div class="article-container">
  <img src={`/images/apush/${topic.image_name}`} alt={topic.title} />
  <h1> {topic.name} </h1>
  <div class="overview" >
    {@html topic.overview}
  </div>

<ActivityLogger params={params} activity_type=article />
</div>


