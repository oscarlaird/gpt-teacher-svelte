<script>
  import TopicTile from './TopicTile.svelte';

  // Define a dummy topic with sample data
  const dummyTopic = {
    name: 'Puebloans',
    quizCount: 5,
    flashcardCount: 8,
    backgroundImage: '/images/mesa_verde.jpg' // assumes the image is stored in the public/images folder
  };

  // Create an array of topics with the dummy topic
  const topics = [dummyTopic];
</script>
<div class="topics-container">
  <!-- Loop through the topics array and create a TopicTile for each topic -->
  {#each topics as topic}
    <TopicTile
      name={topic.name}
      quizCount={topic.quizCount}
      flashcardCount={topic.flashcardCount}
      backgroundImage={topic.backgroundImage}
    />
  {/each}
</div>
