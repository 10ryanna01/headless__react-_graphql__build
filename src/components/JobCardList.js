import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";

// =====================================
//start
// single job component for use in grid and to sort job by years
// =====================================
function SingleJobItem({ data, job }) {


  const [showReadmore, setShowReadmore] = useState("closeme");

  let outerBoundsRef = useRef(null);
  const handleonClickReadMore = () => {
    setShowReadmore(!showReadmore);
  }; 

  const handleClickOutofBounds = e => {
    if (!outerBoundsRef.current.contains(e.target)) {
      setShowReadmore(showReadmore);
    } }; 

  useEffect(() => {
    // register animations here 

    //register outerclick here
    document.addEventListener("mouseup", handleClickOutofBounds);
    return () => document.removeEventListener("mouseup", handleClickOutofBounds);
  }, []);

  
  return (
    <div> 
         

         <div class="card__wrapper" ref={outerBoundsRef}>
      <p>{job.jobyear.map((year) => year.name).join(", ")}</p>
      


      {/* toggle this if we need to go to actual job as its own page */}
      <Link to={`/job/${job.slug.current}`}>
        <h2 className="copy__highlight">{job.name}</h2>

        <p>{job.jobyear.map((job) => job.name).join(", ")}</p>
      </Link>

      <div>
        <p>Contact name:</p>
        {job.name}
   

    
      </div>

      <div>
        <div className={showReadmore ? "closeme" : "openme"}>
          <div>{job.skillslearned}</div>
          
        </div>
      </div>

      <button onClick={handleonClickReadMore}>
        <strong>read more</strong>
      </button>

    <h1 style={{fontSize: "1.1rem"}}>  {job.skillslearned}</h1> 
 
    <p className="dudebro">{job.startmonth.map((job) => job.name)}</p> 
    <p className="dudebro">{job.endingmonth.map((job) => job.name)}</p>
     
    </div>
    </div>
  );
}
// =====================================
// end single job item

// grid component list of jobs
export default function JobCardList({ countAllJobs }) {
  return (
    <div>
      <i>there are {countAllJobs.length} yay in this component list </i>



      {countAllJobs.map((job) => (
        <SingleJobItem job={job} key={job.id} />
      ))}


      
    </div>
  );
}
