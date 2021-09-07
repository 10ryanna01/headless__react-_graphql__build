import * as React from "react";
import "../styles/styles.scss";

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({children}) {

    
return (
    
<div>
<p>hello world i am the layout component</p>
    <Nav />
   {children}
    <Footer />
</div>
    );
}