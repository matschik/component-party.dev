<script module lang="ts">
  import { writable, type Writable } from "svelte/store";

  interface Notification {
    title: string;
    dismissAfter?: number;
    close?: () => void;
  }

  type Notifications = Notification[];

  const { subscribe, update }: Writable<Notifications> = writable([]);

  const DISMISS_TIMEOUT_DEFAULT = 4 * 1000;

  export const notifications = {
    subscribe,
    show(notification: Omit<Notification, "dismissAfter" | "close">): void {
      const fullNotification: Notification = {
        ...notification,
        dismissAfter: DISMISS_TIMEOUT_DEFAULT,
        close() {
          notifications.dismiss(this);
        },
      };
      update((notifications) => [fullNotification, ...notifications]);
    },
    dismiss(notification: Notification): void {
      update((notifications) =>
        notifications.filter((t) => t !== notification),
      );
    },
    dismissAll(): void {
      update(() => []);
    },
  };

  export function addNotificationsMethod(
    method: string,
    cb: (...args: unknown[]) => Omit<Notification, "dismissAfter" | "close">,
  ): void {
    (notifications as Record<string, unknown>)[method] = (
      ...args: unknown[]
    ) => {
      const notification = cb(...args);
      notifications.show(notification);
    };
  }
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    zIndex?: number;
    notificationContainer: Snippet<[{ title: string; close?: () => void }]>;
  }

  let { zIndex = 20, notificationContainer }: Props = $props();

  function dismissAfter(_: unknown, notification: Notification): void {
    if (notification.dismissAfter) {
      setTimeout(
        () => notifications.dismiss(notification),
        notification.dismissAfter,
      );
    }
  }
</script>

<div class="notifications-container" style={`z-index: ${zIndex};`}>
  <ul class="notifications-list space-y-4">
    {#each $notifications as notification (notification)}
      <li use:dismissAfter={notification}>
        {@render notificationContainer(notification)}
      </li>
    {/each}
  </ul>
</div>

<style>
  .notifications-container {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    margin: 2.5rem;
  }

  @media (min-width: 640px) {
    .notifications-container {
      margin: 1.5rem;
      align-items: flex-start;
    }
  }

  .notifications-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 640px) {
    .notifications-list {
      align-items: flex-end;
    }
  }

  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  li {
    width: 20rem;
  }
</style>
