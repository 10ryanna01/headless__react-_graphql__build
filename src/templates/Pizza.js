import * as React from "react";
import { graphql } from "gatsby";

export default function SinglePizzaPage() {
  return <p>single pizza you made it</p>;
}

export const query = graphql`
  query ($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
    }
  }
`;
