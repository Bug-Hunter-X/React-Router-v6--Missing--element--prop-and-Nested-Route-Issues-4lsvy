```javascript
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function ParentComponent() {
  return (
    <>
      <h1>Parent</h1>
      <Outlet/>
    </>
  );
}

function ChildComponent() {
  return <h1>Child</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent" element={<ParentComponent />}>
          <Route path="child" element={<ChildComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This corrected code includes the required `element` props in all `Route` components and uses the `Outlet` component in `ParentComponent` to render the child route.  This ensures that all components render as expected and nested routes are handled properly.  Note that the path for the nested route is now just `child` and not `/parent/child`, which ensures that the nested route renders under the parent route.