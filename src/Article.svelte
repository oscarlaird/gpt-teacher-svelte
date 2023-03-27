<!-- src/Article.svelte -->
<script>
  import ArticleButtons from './ArticleButtons.svelte';
  export let topic;
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
  }
</style>

<div class="article-container">
  <img src={`/images/apush/${topic.image_name}`} alt={topic.title} />
  <h1> {topic.name} </h1>
  <div class="overview" >
    {@html topic.overview}
  </div>
  <ArticleButtons {topic} />
</div>

