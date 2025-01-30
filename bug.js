```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `react-router-dom` v6.  A common error is forgetting to add the `element` prop to the `Route` components.  If you omit it, the route won't render anything, resulting in a blank page or unexpected behavior.  In older versions (v5 and below), this would not be an error, but the behavior would still be unexpected.

Another potential issue, if you are working with nested routes, is forgetting to use the `Outlet` component to render child routes within the parent route's component:
```javascript
// Incorrect
<Route path="/parent" element={<ParentComponent />}>
  <Route path="/parent/child" element={<ChildComponent />} />
</Route>

// Correct
<Route path="/parent" element={<ParentComponent />}>
  <Route path="/parent/child" element={<ChildComponent />} />
</Route>
```
This would cause the child routes to not render.  Always verify you use the correct syntax for nested routes.