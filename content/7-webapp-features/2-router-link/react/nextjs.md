With <a href="https://nextjs.org/docs/api-reference/next/link">NextJS</a>

```jsx
import Link from 'next/link';

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </li>
    </ul>
  );
}
```
