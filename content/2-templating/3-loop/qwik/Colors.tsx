import { component$, Host } from '@builder.io/qwik';

export const Colors = component$(() => {
  const colors = ['red', 'green', 'blue']; 
  return (
    <Host>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </Host>
  );
});
