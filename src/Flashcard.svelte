<script>
  export let flipped = false;
  export let question = 'Question?';
  export let answer = 'Answer.';
  const flipCard = () => flipped = !flipped;
</script>

<div class="card-container" on:click="{flipCard}">
  <div class="card" class:flipped="{flipped}">
    <div class="side front">
	    <h1>{question}</h1>
    </div>
    <div class="side back">
	    <h1>{answer}</h1>
    </div>
  </div>
</div>

<style>
  .card-container {
    perspective: 1100px;
    height: 80%;
    max-height: 500px;
    width: 90%;
    max-width: 900px;
    border-radius: 20px;
  }

  .card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  .side {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
  }

  .front h1,
  .back h1 {
    font-size: 40px;
    text-align: center;
  }

  .front {
    background-color: white;
    color: black;
  }

  .back {
    background-color: white;
    color: black;
    transform: rotateY(180deg);
  }

  .flipped {
    transform: rotateY(180deg);
  }
</style>
