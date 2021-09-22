import * as React from "react"; 
import "../styles/styles.scss";
import PageBackground from "./Background"; 
import Footer from "./Footer";
import PageHeader from "./Header";    
export default function Layout({ children }) { 


return (
<>   
 
    
    <PageHeader />
    <PageBackground />    
   {children  }
    <Footer /> 
</>
    );
}

