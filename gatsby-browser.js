import React from "react";
import Layout from "./src/components/Layout";
import YearsFilter from "./src/components/JobsFilter";

export function wrapPageElement({ element, props  }) {
  return  <Layout {...props}> {element}  
                  
                

  </Layout>
  
  ;}

 

 
 
// export function shouldUpdateScroll(element, { props }) {
//   window.scrollTo(0, 0)
//   const body = document.getElementsByTagName('body')[0]
//   body.scrollTop = 0
//   return false
// }

