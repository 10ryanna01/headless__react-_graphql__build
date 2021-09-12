import * as React from "react";
import { graphql } from "gatsby"; 
import { Link } from "gatsby";

 
export default function SingleJobPage({data}) {
    const jobinfo = data.job;
    console.log(jobinfo.jobyear, "dude");
  return (
  <div>
  <p>single jobpage you made it</p>
  <p>{jobinfo.name }</p>
  <p>{jobinfo.skillslearned}</p>
  <p>{jobinfo.jobyear.name }</p>
    
  
show me the year the film was made       <p>{jobinfo.jobyear.map((year) => year.name).join(", ")}</p> 
 
       <p> go back to year index of {jobinfo.jobyear.map((year) => (
  <Link to={`/year/${year.name}`} key={year.id}>
      <span> {year.name } 's</span>
  </Link> ))} </p> 
 
    </div>
    );
}

export const query = graphql`
  query ($slug: String!) {
    job: sanityJobrole(slug: { current: { eq: $slug } }) {
      name
      id
      roleoverview
      skillsapplied
      skillslearned
      joblocation {
        name
        id
      }
      jobyear {
        name
        id
      } 
      jobyear {
        name
        id
      } 
      startmonth {
        name
      }
      endingmonth {
        name
      }

    }
  }
`;


 