import * as React from "react";
import { graphql } from "gatsby";
import PizzaList from "../components/PizzaList";

//call in filter to sort pizzas with toppings
import ToppingsFilter from "../components/ToppingsFilter";

export default function PizzasPage({ data, pageContext }) {
  // check and log the data structure in console
  console.log({ data });

  const pizzas = data.pizzas.nodes;
  return (
    <div>
      <p> hey! i'm the pizzas page 🍕🍕🍕🍕</p>

      <p>🍕🍕🍕 hey! there are {pizzas.length} pizzas 🌤️😋 🍕🍕🍕🍕</p>

      <ToppingsFilter activeTopping={pageContext.topping} />
      <PizzaList pizzas={pizzas} />
    </div>
  );
}

export const query = graphql`
  query PizzaQuery($topping: [String]) {
    pizzas: allSanityPizza(
       filter: { 
         toppings: { 
         elemMatch: { name: { in: $topping } } } }
    ) {
      nodes {
        name
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
      }
    }
  }
`;
