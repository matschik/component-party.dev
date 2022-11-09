import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";

/**
 * Fallback content as described in the docs is not working
 * with no immediate plans on adding support again.
 * https://github.com/BuilderIO/qwik/issues/1106
 *
 * The recommended workaround is something like this, using CSS
 */
const FunnyButton = component$(() => {
  useStylesScoped$(`
      button {
        background: rgba(0, 0, 0, 0.4);
        color: #fff;
        padding: 10px 20px;
        font-size: 30px;
        border: 2px solid #fff;
        margin: 8px;
        transform: scale(0.9);
        box-shadow: 4px 4px rgba(0, 0, 0, 0.4);
        transition: transform 0.2s cubic-bezier(0.34, 1.65, 0.88, 0.925) 0s;
        outline: 0;
      }

      .slot:not(:empty) + .fallback {
        display: none;
      }
  `);
  return (
    <button>
      <span class="slot">
        <Slot />
      </span>
      <span class="fallback">No content found</span>
    </button>
  );
});

export default FunnyButton;
