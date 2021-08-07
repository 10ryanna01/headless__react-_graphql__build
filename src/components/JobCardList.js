import React, { useState, useRef } from "react";
import { Link } from "gatsby";

// =====================================
//start
// single job component for use in grid and to sort job by years
// =====================================
function SingleJobItem({ job, data}) {
  const [showReadmore, setShowReadmore] = useState("closeme");

  const handleonClickReadMore = () => {
    setShowReadmore(!showReadmore);
    //     if (showReadmore === false){
    //     setShowReadmore(true);
    // }
    // else {
    //     setShowReadmore(false);
    // }
  };
  
  return (
    <div> 
         
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

      {job.skillslearned}
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
