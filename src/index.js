// We used this for the pure-react  :
// <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
// Same thing.
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}
function Menu() {
  // array is a truthy value.
  const pizzas = pizzaData;
  // this is a falsy values.
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/*Testing to see if we have pizzas. If the pizza array is empty we are not going to show anything.*/}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {/*Foreach wouldn't work in here we need JSX is by creating a new array.*/}
          {pizzas.map((pizza) => (
            <Pizza key={pizza.name} pizzaObject={pizza}></Pizza>
          ))}
        </ul>
      ) : (
        <p>Menu is being updated. We will be expecting you soon.</p>
      )}

      {/*<Pizza*/}
      {/*  name="Pizza Spinaci"*/}
      {/*  ingredients="Tomato, mozarella, spinach, and ricotta cheese"*/}
      {/*  image="pizzas/spinaci.jpg"*/}
      {/*  price={10}*/}
      {/*></Pizza>*/}
      {/*<Pizza*/}
      {/*  name="Pizza Funghi"*/}
      {/*  ingredients="Tomato, mushrooms , mozarella"*/}
      {/*  image="pizzas/funghi.jpg"*/}
      {/*  price={13}*/}
      {/*/>*/}
    </main>
  );
}
function Order({ close, closedDay }) {
  return (
    <div className="order" style={{ textAlign: "center" }}>
      <p>We are open until {close}:00. Come visit us or order online.</p>
      <p>Closed on : {closedDay}</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Footer() {
  // return React.createElement("footer", null, "We are currently open!");
  const hour = new Date().getHours();
  const openHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openHour && hour <= closingHour;
  const closeDay = "Sunday";
  console.log(isOpen);

  // if (!isOpen) {
  //   return <p>CLOSED</p>;
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <Order close={closingHour} closedDay={closeDay}></Order>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closingHour}:00.
        </p>
      )}
    </footer>
  );
}
// Destructuring
function Pizza({ pizzaObject }) {
  console.log();
  // Return JSX
  if (pizzaObject.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObject.photoName} alt={pizzaObject.name}></img>
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.price + 3}</span>
        <span>{pizzaObject.soldOut}</span>
      </div>
    </li>
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
