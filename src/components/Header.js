import React from "react";
import { Link, navigate, } from "gatsby";
import { graphql } from "gatsby"; 
export default function PageHeader({ activeYear, activeLocation, data, pageContext }) {
 

    //   const handleChangeOption = (e) => {
    //     if (e.target.value === "0") {
    //       navigate("/basePage");
    //     }
    //     if (e.target.value === "1") {
    //       navigate("/");
    //     }
    //   };
    return (

        <>
    <header className="header__wrapper">
  <div className="header__block">
    <section className="header__personal">

    {/* <YearsFilter activeYear={activeYear} activeLocation={activeLocation}  /> */}

      <p className="header__headshot">
        <img
          src="http://insightsurfer.net/gulp/MicrositePortfolio/web/resources/images/profile.png"
          className="header__headshot__img" />
        
        
        
               
        <Link to="/basePage" className="templink header__contact__social__link "   title="Download My Resume (PDF)"
            target="_blank">grab my Resume
            <svg xmlns="http://www.w3.org/2000/svg" class="icon__social" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
</svg>
            </Link>
       
    
      </p>

      <div className="header__summary">
        <p>ryann al-lahiq </p>

        <p>experienced Front-End Developer </p>

        <p>based in London, UK</p>
        <div className="header__contact__social">
  
          <a
            href="https://uk.linkedin.com/in/ryannwithtwons"
            title="Get In Touch On My LinkedIn"
            target="_blank"
            className="header__contact__social__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="icon__social"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
          </a>

          <a
            href="#/"
            title="Checkout This Build On My Github"
            className="header__contact__social__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="icon__social"
            >
              <path
                d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"
              />
            </svg>
          </a>

          <a
            href="https://open.spotify.com/playlist/5XwD3GdQDrsoYiQC43SDXZ"
            title="Coding Music Playlist || Music To Code To"
            target="_blank"
            className="header__contact__social__link"
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
    
              x="0px"
              y="0px"
              width="98.372px"
              height="98.372px"
              viewBox="0 0 98.372 98.372"
              
            
              className="icon__social"
            >
              <g>
                <g id="Layer_1_1_">
                  <path
                    d="M49.186,0.002C22.022,0.002,0,22.021,0,49.186C0,76.35,22.022,98.37,49.186,98.37c27.164,0,49.186-22.021,49.186-49.185
			C98.372,22.021,76.35,0.002,49.186,0.002z M68.116,72.547c-0.796,0-1.339-0.275-2.082-0.729c-7.129-4.313-16.019-6.58-25.449-6.58
			c-5.264,0-10.561,0.677-15.515,1.707c-0.805,0.175-1.817,0.484-2.425,0.484c-1.867,0-3.111-1.482-3.111-3.092
			c0-2.064,1.19-3.096,2.675-3.379c6.075-1.385,12.125-2.176,18.409-2.176c10.762,0,20.354,2.471,28.608,7.418
			c1.228,0.717,1.947,1.449,1.947,3.27C71.174,71.245,69.732,72.547,68.116,72.547z M73.475,59.529
			c-1.067,0-1.738-0.432-2.465-0.854c-8-4.748-19.09-7.902-31.232-7.902c-6.228,0-11.604,0.873-16.053,2.058
			c-0.959,0.265-1.496,0.549-2.394,0.549c-2.114,0-3.842-1.726-3.842-3.856c0-2.091,1.015-3.529,3.059-4.105
			c5.529-1.52,11.177-2.689,19.394-2.689c12.875,0,25.33,3.206,35.121,9.066c1.642,0.939,2.246,2.137,2.246,3.887
			C77.309,57.809,75.613,59.529,73.475,59.529z M79.577,44.389c-1,0-1.595-0.244-2.533-0.758
			c-8.901-5.338-22.719-8.277-36.079-8.277c-6.67,0-13.443,0.679-19.648,2.362c-0.715,0.179-1.616,0.537-2.521,0.537
			c-2.624,0-4.638-2.076-4.638-4.699c0-2.674,1.656-4.174,3.442-4.701c7.012-2.065,14.838-3.027,23.346-3.027
			c14.443,0,29.639,2.971,40.738,9.488c1.496,0.849,2.533,2.126,2.533,4.468C84.215,42.462,82.061,44.389,79.577,44.389z"
                  />
                </g>
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      </div>
    </section>
    <aside className="header__search">
{/* <!-- <h1 className="header__title"> portfolio timeline</h1> --> */}
{/* <div className="filter__wapper">
  <select className="filter__select">
    <option>Filter by Year</option>
    <option>apples</option>
    <option>banana</option>
    <option>pear</option>
    <option>orange</option>
  </select>
  <select className="filter__select">
    <option>Filter by Location</option>
    <option>apples</option>
    <option>banana</option>
    <option>pear</option>
    <option>orange</option>
  </select>
</div> */}

</aside>
  </div>
</header>

            </>
                );
}