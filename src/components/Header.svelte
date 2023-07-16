<script>
  import GithubStarButton from "./GithubStarButton.svelte";
</script>

<header class="backdrop-blur bg-gray-900/80 border-b border-gray-700">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center py-3">
      <a class="font-semibold text-lg flex items-center space-x-3" href="/">
        <img src="/popper.svg" alt="logo" class="w-5 h-5" />
        <span>Component party</span>
      </a>
      <GithubStarButton />
    </div>
  </div>
</header>
