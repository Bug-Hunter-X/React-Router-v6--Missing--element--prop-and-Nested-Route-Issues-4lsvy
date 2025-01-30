# React Router v6 Common Errors

This repository demonstrates two uncommon errors that can occur when using `react-router-dom` v6:

1. **Missing `element` prop in `Route` components:** Forgetting to specify the `element` prop in a `Route` component will prevent the corresponding component from rendering, leading to unexpected behavior.
2. **Incorrect handling of nested routes:**  Improper nesting of routes, particularly without the use of the `Outlet` component in the parent route's component, will prevent child routes from rendering correctly.  This is a less common error than the missing `element` prop, but can be quite confusing to debug.

The `bug.js` file contains code exhibiting the errors, while `bugSolution.js` shows how to fix them.

## How to reproduce

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to run the application.
4. Observe the issues with missing components and non-functioning nested routes.  Then, refer to `bugSolution.js` to correct the issue.