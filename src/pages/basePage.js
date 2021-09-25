import * as React from "react";
import { graphql } from "gatsby"; 
import JobCardList from "../components/JobCardList"; 
import YearsFilter from "../components/JobsFilter";
 

export default function BasePage({ data, pageContext, location }) {
  console.log({ data });
  const countAllJobs = data.jobs.nodes;

  return (
    <div>
     
     
  <YearsFilter activeYear={pageContext.year} activeLocation={pageContext.location}  /> 
        {/* <title>Second page</title>
        <span>
          hello world this is the <i>base page</i>
        </span>
        <span>
          hello world there are {countAllJobs.length} on this <i>base page</i>
        </span> */}
  <main className="results__wrapper">

        <JobCardList countAllJobs={countAllJobs} />
      
</main>
    
    </div>
  );
}

//filter query by date created DESC & add filter by year and joblocation
export const query = graphql`
  query QueryAllJobs($year: [String], $location: [String]) {
    jobs: allSanityJobrole(
      sort: { fields: [_createdAt], order: DESC }
      filter: {
        jobyear: { elemMatch: { name: { in: $year } } }
        joblocation: { elemMatch: { name: { in: $location } } }
      }
    ) {
      nodes {
        id
        name
        skillsapplied
        skillslearned
        roleoverview
        namecompany
        companyoutline
        startmonth {
          name
        }
        endingmonth {
          name
        }
        slug {
          current
        }
        joblocation {
          id
          name
        }
        jobyear {
          id
          name
        }
      }
    }
  }
`;
