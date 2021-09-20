import * as React from "react"; 
import "../styles/styles.scss";
import PageBackground from "./Background"; 
import Footer from "./Footer";
import PageHeader from "./Header";  
import YearsFilter from "./JobsFilter";

export default function Layout({ children, pageContext,     }) { 
   
return (
    
<>
{/* <p>hello world i am the layout component</p> */}
    {/* <Nav /> */}

    
    <PageHeader />
    <PageBackground />   
    <YearsFilter  activeYear={pageContext.year} activeLocation={pageContext.location}   />
   {children  }
    <Footer />

</>
    );
}

