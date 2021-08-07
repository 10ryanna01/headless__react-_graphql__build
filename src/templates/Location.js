import * as React from "react";
import { graphql } from "gatsby"; 
import { Link } from "gatsby";

 
export default function SingleLocationPage({data}) {
    const joblocationinfo = data.joblocale;
    
    console.log(joblocationinfo.jobyear.name, "dude"); 
    console.log(joblocationinfo.joblocation.name, "dude");
     
  return (
  <div>
  <p>single location page template you made it...this page template will display all jobs by location you clicked</p>
  <p>{joblocationinfo.joblocation.map((location) => location.name).join(", ")}</p> 
  
  
  <p> {joblocationinfo.jobyear.map((year) => (
  <Link to={`/year/${year.name}`} key={year.id}>
  <span> {year.name }</span>
  </Link>
  
  ))}
  </p>
  
   <span> is the year here?</span>
    <p>{joblocationinfo.skillslearned}</p>
  
    
  
      
    </div>
    );
}

export const locationquery = graphql`

  query ($slug: String!) {
    joblocale: sanityJobrole(slug: { current: { eq: $slug } })  { 
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
    }
  }
`;


 