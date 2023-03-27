<script>
</script>

<div class="container">
  <h1 class="subject-title">AP US History</h1>
  <button class="login-button">Login</button>
  <div class="button-group">
    <button class="button quiz-button">Quiz!</button>
    <button class="button flashcards-button">Flashcards</button>
    <button class="button read-button">Read</button>
  </div>
  <div class="progress-chart">Progress chart</div>
  <div class="activity-log">Activity log</div>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .subject-title {
    grid-column: 1 / 4;
    text-align: center;
  }

  .login-button {
    justify-self: end;
  }

  .button-group {
    grid-column: 1 / 4;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .progress-chart,
  .activity-log {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
  }

  .progress-chart {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  .activity-log {
    grid-column: 3 / 4;
    grid-row: 3;
  }

  @media screen and (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
    
    .subject-title {
      grid-column: 1 / 2;
    }

   .button-group {
	   grid-column: 1 / 2;
}
.progress-chart {
  grid-column: 1 / 2;
  grid-row: 4;
}

.activity-log {
  grid-column: 1 / 2;
  grid-row: 5;
}

}
</style>

