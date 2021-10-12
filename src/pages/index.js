import * as React from "react";  
import { graphql } from "gatsby";
import { Helmet } from "react-helmet"
import JobCardList from "../components/JobCardList";
import YearsFilter from "../components/JobsFilter";
import "../styles/styles.scss";

// markup
const IndexPage = ({ data, pageContext, location }) => {
  console.log({ data });
  const countAllJobs = data.jobs.nodes;
 
 

  return (
    <> 

        <Helmet htmlAttributes={{ lang : 'en' }}>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" /> 
          <meta name="description" content="Front-End Developer Portfolio Website. Front-End Developer based in London, UK" />
          <title>ryann al-lahiq experienced Front-End Developer based in London, UK</title>
          <meta keywords="Front End Developer, Gatsby, React, Javasctipy, Portfolio, Developer" />
          <link rel="canonical" href="https://insightsurfer.gatsbyjs.io/" />
        </Helmet>
 
      <YearsFilter  activeYear={pageContext.year} activeLocation={pageContext.location} />
      <main className="results__wrapper" aria-label="filter search results">
     
        <JobCardList countAllJobs={countAllJobs} />
       
      </main>
     
  
    </>
  );
};

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
