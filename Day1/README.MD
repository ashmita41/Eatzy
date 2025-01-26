# React Learning Notes

## Theory

### What is Emmet?
Emmet is a plugin for text editors that allows developers to write HTML and CSS code faster using shorthand syntax. For example, typing `div>ul>li*3` and pressing Tab expands to:
```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

### Difference Between a Library and Framework
- **Library**: A collection of pre-written code that you can call to perform specific tasks. You control the flow of the application.
- **Framework**: A comprehensive platform that provides structure for your application. It dictates the flow and calls your code as needed.

### What is CDN? Why Do We Use It?
- **CDN (Content Delivery Network)**: A network of servers distributed globally to deliver content (like scripts, stylesheets, and images) faster by reducing latency.
- **Why Use It?**
  - Faster loading times.
  - Reduces server load.
  - Improves availability and scalability.

### Why is React Known as React?
React is named for its reactive programming model, where changes in state or data automatically update the user interface.

### What is `crossorigin` in Script Tag?
The `crossorigin` attribute specifies how the browser should handle cross-origin requests for the script. Common values:
- `anonymous`: Requests without credentials.
- `use-credentials`: Requests with credentials like cookies.

### Difference Between React and ReactDOM
- **React**: The core library for building UI components.
- **ReactDOM**: A library that provides methods to render React components to the DOM.

### Difference Between `react.development.js` and `react.production.js`
- **react.development.js**: Includes debugging features and warnings for development.
- **react.production.js**: Minimized and optimized for performance in production.

### What is `async` and `defer`?
- **async**: The script loads asynchronously and executes as soon as it's available.
- **defer**: The script loads asynchronously but executes after the HTML is fully parsed.

---

## Coding

### Set Up All the Tools on Your Laptop
1. **VS Code**
   - Download and install from [VS Code](https://code.visualstudio.com/).
2. **Chrome**
   - Download and install from [Google Chrome](https://www.google.com/chrome/).
3. **Chrome Extensions**
   - Install helpful extensions like React Developer Tools and Redux DevTools.

### Create a New Git Repository
1. Initialize a new repository:
   ```bash
   git init
   ```
2. Add a remote origin:
   ```bash
   git remote add origin <repository-URL>
   ```
3. Commit and push changes:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

### Build Your First Hello World Program

#### Using Just HTML
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

#### Using JS to Manipulate the DOM
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
</head>
<body>
  <div id="root"></div>
  <script>
    const root = document.getElementById('root');
    root.textContent = 'Hello, World!';
  </script>
</body>
</html>
```

#### Using React

##### Use CDN Links
```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello World</title>
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
</head>
<body>
  <div id="root"></div>
  <script>
    // Create an Element
    const element = React.createElement('h1', null, 'Hello, World!');

    // Create Nested React Elements
    const nestedElement = React.createElement('div', null, 
      React.createElement('h1', null, 'Hello, React!'),
      React.createElement('p', null, 'This is nested content.')
    );

    // Use root.render
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(nestedElement);
  </script>
</body>
</html>
