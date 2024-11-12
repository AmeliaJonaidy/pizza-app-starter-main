import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function Header() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <header className="header">
      <h1>Amelia's Pizza Co.</h1>
      {/* Display the tagline "Authentic Italian Cuisine" at the top. */}
      {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
    </header>
  );
}

// Store all pizza data (name, ingredients, price, and image URL) in an array. 
// Use the map() function to loop through this array and render each pizza item on the web page dynamically 
// using the Pizza component.
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.photoName}
            rating={pizza.rating}
          />
        ))}
      </div>
    </div>
  );
}

// Create a Pizza component that displays the pizza's name, description, price, and image. 
// Use props to pass these details into the component so that it can be reused for multiple pizzas.
function Pizza({ name, ingredients, price, image, rating}) {
  return (
    <div className="pizza">
      <img src={image} alt={name} />
      <div className="pizza-info">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>${price}</p>
        
        {/* Display Rating For the Additional Feature*/}
        <div>
          <p><strong>Rating: </strong></p>
          <p>{rating} ⭐</p>
        </div>

      </div>
    </div>
  );
}


function Footer(){
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;
  return (
    <footer className="footer">
      <h2 classname="footerline">{isOpen ? "We're currently open." : "Sorry, we're closed."}</h2>
      {/* Show an "Order" button below the message. */}
      {isOpen && <div className="order"><button className="btn">Order Now</button></div>}
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
