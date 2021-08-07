import * as React from "react";
import { Link } from "gatsby";
function SinglePizza({ pizza }) {
  return (
    <div>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2 className="copy__highlight">{pizza.name}</h2>

        <p>{pizza.toppings.map((topping) => topping.name).join(", ")}</p>
      </Link>
    </div>
  );
}

export default function PizzaList({ pizzas }) {
  // check and log the data structure in console

  return (
    <div>
      <p> there are {pizzas.length} 🍕🍕🍕🍕 pizzas</p>

      {pizzas.map((pizza) => (
        <SinglePizza pizza={pizza} key={pizza.id} />
      ))}
    </div>
  );
}
