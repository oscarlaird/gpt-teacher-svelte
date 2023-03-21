<script>
  import Header from './Header.svelte';
  import Topics from './Topics.svelte';
  import Footer from './Footer.svelte';
  
  const courseName = 'AP US History'; // example course name
</script>
<Header courseName={courseName} />
<Topics />
<Footer />
