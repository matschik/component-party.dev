With [solid-app-router](https://github.com/solidjs/solid-app-router)

```jsx
import { Link } from 'solid-app-router';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About us</Link>
      </li>
    </ul>
  );
}
```
