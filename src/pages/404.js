import * as React from "react"
import { Link } from "gatsby"



// markup
const NotFoundPage = () => {
  return (
    <main className="utility__alert-container" role="error page">
           <img
          className="errorpage"
          src="https://images.unsplash.com/photo-1587226513115-f1e3439f1a35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80"
        />
        
      <title className="copy__404__title">Not found #whoopse</title>
      <h1 className="copy__404__title" role="heading">404 Page not found</h1>
      <h2 className="copy__404__desc"> Sorry Bro, can't find your ticket to this destination, it looks like you went too farout 
        <span role="img" aria-label="Pensive emoji">😅 </span></h2>
        <h3 className="copy__404__desc">try another page, or
         <Link to="/" className="utility__alert-container__link">Head back to the <i>start</i></Link>.   
         </h3>
    </main>
  )
}

export default NotFoundPage
