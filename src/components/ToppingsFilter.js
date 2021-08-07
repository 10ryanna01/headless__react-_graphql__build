import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function countPizzasInToppings(pizzas) {
  console.log(pizzas);

  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((acc, topping) => {
      // accumulate count based on existing topping
      const existingTopping = acc[topping.id];

      if (existingTopping) {
        console.log("Existing Topping", existingTopping.name);
        existingTopping.count += 1;
      } else {
        console.log("New Topping", topping.name);
        acc[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );

  return sortedToppings;
}

export default function ToppingsFilter({activeTopping}) {
  const { toppings, pizzas } = useStaticQuery(graphql`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          vegitarian
        }
      }

      pizzas: allSanityPizza {
        nodes {
          toppings {
            id
            name
          }
        }
      }
    }
  `);

  console.log({ toppings, pizzas });

  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  console.log({ toppingsWithCounts });
  return (
    <div>
      <h1>this is the toppings list to choose from</h1>

      <p>the active ingredient/year would be <strong>{activeTopping}</strong></p>

      <div className="d__grid">

      <Link to ="/pizzasPage"> 
               <span className="copy__cat">All/latest </span>

                <span className="copy__cat"> ( {pizzas.nodes.length} )</span>

            
            </Link>
   
        {toppingsWithCounts.map((topping) => (
            
          <Link to={`/topping/${topping.name}`} key={topping.id}>
            <div className="nav__categories">
              <span className="copy__cat">{topping.name} </span>

              <span className="copy__cat"> ( {topping.count} )</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
