<!-- SignIn.svelte -->
<script>
  import { push } from 'svelte-spa-router';
  import { onMount } from "svelte";
  import { auth, database } from "./firebaseApp.js";
  import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
  import { get, set, ref, child } from 'firebase/database';
  import * as firebaseui from "firebaseui";
  import "firebaseui/dist/firebaseui.css";
  let userData = null;

  let ui;

    const uiConfig = {
      // signInSuccessUrl: "/#/home" // we are using spa-router so don't do this
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID, 
      ],
      callbacks: {
	      signInSuccessWithAuthResult: (authResult) => {
		      if (authResult.additionalUserInfo.isNewUser) {
			      const currentUser = auth.currentUser
			      const userRef = ref(database, 'users/' + currentUser.uid);
			      set(userRef, {
				      name: currentUser.displayName,
				      email: currentUser.email,
				      score: 0,
			      })
		      }
		      push( '/home' );
		      return false // do not redirect after successful sign-in
	      }
      }
    };

  onMount(() => {
    ui = new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", uiConfig);

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
	    if (user) {
		    //
		    const userRef = ref(database, 'users/' + user.uid);
		    const snapshot = await get(userRef);
		    userData = {
			    name: snapshot.val().name,
			    score: snapshot.val().score,
		    }
	    } else {
		    userData = null;
		    ui.reset();
		    ui.start("#firebaseui-auth-container", uiConfig);
	    }
    })

    // cleanup when component destroyed
    return () => {
	    unsubscribe();
	    ui.delete();
    };
  });
</script>

{#if userData}
  <h1>Hello, {userData.name}!</h1>
  <p>Your score: {userData.score}</p>
{:else}
  <div id="firebaseui-auth-container"></div>
{/if}

