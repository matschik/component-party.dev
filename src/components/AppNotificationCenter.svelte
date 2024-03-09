<script>
  import NotificationCenter from "@veljs/svelte/NotificationCenter.svelte";
  import TransitionWithClass from "@veljs/svelte/TransitionWithClass.svelte";
  import { CheckCircleIcon, XMarkIcon } from "heroiconsvelte/24/outline";
</script>

<NotificationCenter zIndex={100} let:notification>
  {@const { title } = notification}
  <TransitionWithClass
    class="pointer-events-auto overflow-hidden rounded-lg bg-[#181622] border border-[#33323e] shadow-lg ring-1 ring-black ring-opacity-5"
    enter="transform ease-out duration-200 transition"
    enterFrom="translate-y-2 opacity-0 translate-y-0 translate-x-2"
    enterTo="translate-y-0 opacity-100 translate-x-0"
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-6 w-6 text-green-400" />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium">
            {title}
          </p>
        </div>
        <div class="ml-4 flex flex-shrink-0">
          <button
            class="inline-flex rounded-md bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            on:click={() => notification.close()}
          >
            <span class="sr-only">Close</span>
            <XMarkIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </TransitionWithClass>
</NotificationCenter>
