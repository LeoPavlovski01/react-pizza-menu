// We used this for the pure-react  :
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// Same thing.
import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// conventional to name the function App
function App() {
  return (
    //   Nesting
    <div>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza></Pizza>
    </div>
  );
}
function Footer() {
  // return React.createElement("footer", null, "We are currently open!");
  const hour = new Date().getHours();
  const openHour = 12;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour;
  console.log(isOpen);
  return (
    <h2>
      {new Date().toLocaleTimeString()}{" "}
      {isOpen ? "We are currently open!" : "Sorry we're currently closed!"}
    </h2>
  );
}
function Pizza() {
  // Return JSX
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza spinachi" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
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
