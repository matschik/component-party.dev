
<script>
  import { preventDefault } from 'svelte/legacy';

  let usrnme = $state('');
  let paswrd = $state('');
  let errorMessage = $state('');

  function handleSubmit() {
    if (usrnme === 'educative' && paswrd === 'educative') {
      errorMessage = '';
      alert('Login successful!');
      usrnme = '';
      paswrd = '';
    } else {
      errorMessage = 'Invalid username or password';
    }
  }
</script>

<main>
  <h2>Login</h2>
  {#if errorMessage}
    <p class="error">{errorMessage}</p>
  {/if}
  <form onsubmit={preventDefault(handleSubmit)}>
    <label for="usrnme">Username:</label>
    <input type="text" id="usrnme" bind:value={usrnme} />

    <label for="paswrd">Password:</label>
    <input type="password" id="paswrd" bind:value={paswrd} />

    <button type="submit">Log in</button>
  </form>
</main>

<style>
  main {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }

  label {
    display: block;
    margin-top: 10px;
  }

  input {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
  }

  button {
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
  }

  .error {
    color: red;
    margin-top: 10px;
  }
</style>
