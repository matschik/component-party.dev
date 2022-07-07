import { component$, Host, useStyles$ } from '@builder.io/qwik';

export const AppCss = `
.title {
	color: red;
}
`;

export const CssStyle = component$(() => {
  useStyles$(AppCss);
  return (
    <Host>
    	<h1 class="title">I am red</h1>
		  <button style={{ 'font-size': '10rem' }}>I am a button</button>
    </Host>
  );
});
