import * as React from "react";
import { graphql } from "gatsby";

import JobCardList from "../components/JobCardList";

import YearsFilter from "../components/JobsFilter";
// import LocationsFilter from "../components/LocationFilter";

export default function BasePage({ data, pageContext }) {
  console.log({ data });
  const countAllJobs = data.jobs.nodes;

  return (
    <>
      <div className="background__light">
        <title>Second page</title>
        <h1>
          hello world this is the <i>base page</i>
        </h1>
        <h2>
          hello world there are {countAllJobs.length} on this <i>base page</i>
        </h2>

        {/* <LocationsFilter activeLocation={pageContext.location} /> */}
        <YearsFilter activeYear={pageContext.year} activeLocation={pageContext.location} />
        <JobCardList countAllJobs={countAllJobs} />
      </div>
    </>
  );
}

export const query = graphql`
query QueryAllJobs($year: [String], $location: [String]), {
  jobs: allSanityJobrole(
    filter: {jobyear: {elemMatch: {name: {in: $year}}}, 
      joblocation: {elemMatch: {name: {in:  $location}}}}
  ) {
    nodes {
      id
      name
      skillsapplied
      skillslearned
      roleoverview
      namecompany
      companyoutline
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
