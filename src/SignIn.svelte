<!-- SignIn.svelte -->
<script>
  import { onMount } from "svelte";
  import { auth } from "./firebaseApp.js";
  import * as firebaseui from "firebaseui";
  import "firebaseui/dist/firebaseui.css";

  onMount(() => {
    const uiConfig = {
      signInSuccessUrl: "/#/test_components/login_button",
      signInOptions: [
        firebaseui.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseui.auth.EmailAuthProvider.PROVIDER_ID,
      ],
    };

    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start("#firebaseui-auth-container", uiConfig);
  });
</script>

look at these options:
<div id="firebaseui-auth-container"></div>

