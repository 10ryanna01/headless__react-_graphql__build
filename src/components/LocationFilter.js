import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

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

export default function LocationsFilter({ activeLocation }) {
  const { joblocation, jobs } = useStaticQuery(graphql`
    query {
        joblocation: allSanityJoblocation {
        nodes {
          name
          id
        }
      }

      jobs: allSanityJobrole {
        nodes {
          joblocation {
            id
            name
          }
        }
      }
    }
  `);

  console.log({ joblocation, jobs });

  const locationsWithCounts = countJobsInLocations(jobs.nodes);
  console.log({ locationsWithCounts });
  return (
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
  );
}
