import React from "react";
import { graphql, Link, navigate, Navigate, NavigateTo } from "gatsby";
export default function Nav() {
  const handleChangeOption = (e) => {
    if (e.target.value === "0") {
      navigate("/basePage");
    }
    if (e.target.value === "1") {
      navigate("/");
    }
  };
  return (
    <nav>
        <p>hello  world i am the nav component, i appear everywhere
        <select onChange={handleChangeOption}>
            <option value="A">select page</option>
            <option value="0"> jobs page go to first page</option>
            <option value="1">go to secont page</option>
        </select> 
        </p> 
      or go to a page like this:

      <ul>
        <li>
          <Link to="/basePage">go to jobs page here</Link>
        </li>
        <li>
          <Link to="/pizzasPage">go to pizza page</Link>
        </li>
      </ul>
    </nav>
  );
}

