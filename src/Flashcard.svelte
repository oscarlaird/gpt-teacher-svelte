<!-- flashcard.svelte -->
<script>
	  export let question = "";
	    export let answer = "";
</script>

<style>
	  .flashcard {
		      border: 1px solid #ccc;
		          border-radius: 8px;
			      padding: 20px;
			          margin: 10px;
				      max-width: 300px;
				          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
					    }

	    h3 {
		        margin: 0;
			    font-size: 1.1em;
			      }

	      p {
		          margin-top: 10px;
			    }
</style>

<div class="flashcard">
	  <h3>{question}</h3>
	    <p>{answer}</p>
</div>

