// We used this for the pure-react  :
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// Same thing.
import React from "react";
import ReactDOM from "react-dom/client";

// conventional to name the function App
function App() {
  return <h1>Hello React!</h1>;
}

// Create root
// React v18

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   Renders component twice to find certain bugs.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Before before 18
// React.render(<App/>);
