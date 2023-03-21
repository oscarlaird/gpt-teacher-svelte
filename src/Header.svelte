<script>
  import Login from './Login.svelte';

  export let courseName;
</script>
<header>
  <img src="washington_crossing.jpg" alt="Washington Crossing the Delaware" />
  <h1>{courseName}</h1>
  <Login />
</header>
<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #f5f5f5;
  }

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
    font-size: 24px;
    font-weight: bold;
  }

</style>
