import React from "react";
 import Layout from "./src/components/Layout";
 
 export function wrapPageElement({ element, props  }) {
    return  <Layout {...props}> {element}  
                    
                  
  
    </Layout>
    
    ;}
  

    export const onServiceWorkerUpdateReady = () => {
        const answer = window.confirm(
          `This application has been updated. ` +
            `Reload to display the latest version?`
        )
        if (answer === true) {
          window.location.reload()
        }
      }
 
 
// export function shouldUpdateScroll(element, { props }) {
//   window.scrollTo(0, 0)
//   const body = document.getElementsByTagName('body')[0]
//   body.scrollTop = 0
//   return false
// }

