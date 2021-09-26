import * as React from "react";  
import { graphql } from "gatsby"; 
import JobCardList from "../components/JobCardList"; 
import YearsFilter from "../components/JobsFilter";
import "../styles/styles.scss";

 

// markup
const IndexPage = ({ data, pageContext, location }) => {
  console.log({ data });
  const countAllJobs = data.jobs.nodes;
 
  return (
  <>

<YearsFilter activeYear={pageContext.year} activeLocation={pageContext.location}  /> 
  <main className="results__wrapper">

<JobCardList countAllJobs={countAllJobs} />

</main>





    </>  
  );
}

export default IndexPage;

export const query = graphql`
  query HomePageQuery($year: [String], $location: [String]) {
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