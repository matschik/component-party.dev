With [solid-app-router](https://github.com/solidjs/solid-app-router)

```jsx
import { render } from 'solid-js/web';
import { Router, Routes, Route } from 'solid-app-router';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root')
);
```
