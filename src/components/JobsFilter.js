import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";


function countJobsInYears(jobs) {
  console.log(jobs);

  const counts = jobs
    .map((job) => job.jobyear)
    .flat()
    .reduce((acc, year) => {
      // accumulate count based on existing year
      const existingYear = acc[year.id];

      if (existingYear) {
        console.log("Existing year", existingYear.name);
        existingYear.count += 1;
      } else {
        console.log("New year", year.name);
        acc[year.id] = {
          id: year.id,
          name: year.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  const sortedYears = Object.values(counts).sort((a, b) => b.count - a.count);

  return sortedYears;
}

function countJobsInLocations(jobs) {
  console.log(jobs);

  const counts = jobs
    .map((job) => job.joblocation)
    .flat()
    .reduce((acc, location) => {
      // accumulate count based on existing year
      const existingLocation = acc[location.id];

      if (existingLocation) {
        console.log("Existing location", existingLocation.name);
        existingLocation.count += 1;
      } else {
        console.log("New location", location.name);
        acc[location.id] = {
          id: location.id,
          name: location.name,
          count: 1,
        };
      }

      return acc;
    }, {});

  const sortedLocations = Object.values(counts).sort((a, b) => b.count - a.count);

  return sortedLocations;
}



export default function YearsFilter({ activeYear, activeLocation }) {
  const { jobyear, joblocation, jobs } = useStaticQuery(graphql`
    query {
      years: allSanityJobyear {
        nodes {
          name
          id
        }
      }

      joblocation: allSanityJoblocation {
        nodes {
          name
          id
        }
      }

      jobs: allSanityJobrole {
        nodes {
          jobyear {
            id
            name
          }
          joblocation {
            id
            name
          }
        }
      }
    }
  `);

  console.log({ jobyear, jobs });
  const locationsWithCounts = countJobsInLocations(jobs.nodes);
  const yearsWithCounts = countJobsInYears(jobs.nodes);
  console.log({ yearsWithCounts });
  return (

    <div>
    <div>
    <h1>this is the Years list to choose from</h1>

    <p>
      the active ingredient/Location would be <strong>{activeLocation}</strong>
    </p>

    <div className="d__grid">
      <Link to="/basePage">
        <span className="copy__cat">All Locations </span>

        <span className="copy__cat"> ( {joblocation.nodes.length} )</span>
      </Link>

      {locationsWithCounts.map((location) => (
        <Link to={`/location/${location.name}`} key={location.id}>
          <div className="nav__categories">
            <span className="copy__cat">{location.name} </span>

            <span className="copy__cat"> ( {location.count} )</span>
          </div>
        </Link>
      ))}
    </div>
  </div>


    
      <h1>this is the Years list to choose from</h1>

      <p>
        the active ingredient/year would be <strong>{activeYear}</strong>
      </p>

      <div className="d__grid">
        <Link to="/basePage">
          <span className="copy__cat">All/latest </span>

          <span className="copy__cat"> ( {jobs.nodes.length} )</span>
        </Link>

        {yearsWithCounts.map((year) => (
          <Link to={`/year/${year.name}`} key={year.id}>
            <div className="nav__categories">
              <span className="copy__cat">{year.name} </span>

              <span className="copy__cat"> ( {year.count} )</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  ////jobLocation addition
}
