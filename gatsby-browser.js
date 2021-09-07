import React from "react";
import Layout from "./src/components/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}> 💩 {element} </Layout>;

  
}
 
export function shouldUpdateScroll(element, { props }) {
  window.scrollTo(0, 0)
  const body = document.getElementsByTagName('body')[0]
  body.scrollTop = 0
  return false
}

