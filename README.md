# Render HTML

- React's goal is in many ways to render HTML in a web page.
- React renders HTML to the web page via a container, and a function called `createRoot()`.
- his container is a `<div id="root"></div>` element in the `index.html` file

- The createRoot function is located in the main.jsx file in the src folder, and is a built-in function that is used to create a root node for a React application.

- The createRoot() function takes one argument, an HTML element.

- The purpose of the function is to define the HTML element where a React component should be displayed.

- The render method defines what to render in the HTML container.

-The result is displayed in the ```<div id="root">``` element

-Note: the element id does not have to be **"root"**, but this is the standard convention.

