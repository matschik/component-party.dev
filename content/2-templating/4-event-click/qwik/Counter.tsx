import { component$, useStore, Host } from '@builder.io/qwik';

export const Counter = component$(() => {
	const store = useStore({ count: 0 });
	return (
  <Host>
    <p>Counter: {store.count}</p>
    <button onClick$={() => store.count++}>Increment</button>
  </Host>
  );
});
