<script module>
  import { writable } from "svelte/store";
  const { subscribe, update } = writable([]);

  const DISMISS_TIMEOUT_DEFAULT = 4 * 1000;

  export const notifications = {
    subscribe,
    show(notification) {
      notification = {
        ...notification,
        dismissAfter: DISMISS_TIMEOUT_DEFAULT,
        close() {
          notifications.dismiss(this);
        },
      };
      update((notifications) => [notification, ...notifications]);
    },
    dismiss(notification) {
      update((notifications) =>
        notifications.filter((t) => t !== notification)
      );
    },
    dismissAll() {
      update(() => []);
    },
  };

  export function addNotificationsMethod(method, cb) {
    notifications[method] = (...args) => {
      const notification = cb(...args);
      notifications.show(notification);
    };
  }
</script>

<script>
  let { zIndex = 20, notificationContainer } = $props();

  function dismissAfter(_, notification) {
    notification.dismissAfter &&
      setTimeout(
        () => notifications.dismiss(notification),
        notification.dismissAfter
      );
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
