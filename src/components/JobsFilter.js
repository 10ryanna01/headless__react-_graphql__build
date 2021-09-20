import React, { useState, useEffect, useRef  } from "react";
import { graphql, useStaticQuery, Link  } from "gatsby";
import gsap from "gsap"; 
// gsap config toggle for testing
gsap.config({ nullTargetWarn: false });

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

  const sortedLocations = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );

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
          startmonth {
            id
            name
          }
          endingmonth {
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
//// start filtering click events and animation timings

 
  let dropdownARef = useRef(null);
  let dropdownBRef = useRef(null);
  let refOutsideclickB = useRef(null);
  let refOutsideclickA = useRef(null);

  const animation = useRef(null);
  const animationB = useRef(null); 


 
  const [selectedItemYears, setSelectedItemYears] = useState(activeYear);
  //end  drop down  ====  job years =========
  const [isOpenYears, setOpenYears] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(joblocation);
  const [selectedItem, setSelectedItem] = useState(activeLocation);

  // end drop down  ====  job location =========

  const tlB = useRef(
    gsap.timeline({
      defaults: { ease: "Power2.inOut", autoAlpha: 1, duration: 0.2 },
    })
  );

  let animatedropdownB = () => {
    animationB.current = gsap.timeline().to(dropdownBRef.current, {
      height: "auto",
      pointerEvents: "none",
      ease: "Power3.easeInOut",
    });

    return () => {
      animationB.current.kill();
    };
  };

  let animatedropdownA = () => {
    animation.current = gsap.timeline().to(dropdownARef.current, {
      height: "auto",
      pointerEvents: "none",
      ease: "Power3.easeInOut",
    });

    return () => {
      animation.current.kill();
    };
  };

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(activeLocation) : setSelectedItem(id);
    setOpen(!isOpen);
  };

  // gsap info: https://greensock.com/position-parameter/
  // drop down  ====  job years =========

  const toggleDropdownYears = (e) => {
    setOpenYears(!isOpenYears);
    // scrollTo('#some-id');
    return false;
  };

  const toggleDropdownLocation = (e) => {
    setOpen(!isOpen);
    return false;
  };

  const handlemyExitDropdownA = (e) => {
    if (!refOutsideclickA.current.contains(e.target)) {
      //  keep false to not trigger global mouse event
      setOpen(false);
      // scrollTo('#some-id');
    }
  };

  const handlemyExitDropdownB = (e) => {
    if (!refOutsideclickB.current.contains(e.target)) {
        //  keep false to not trigger global mouse event
      setOpenYears(false);
    }
  };

  //////////  =========================
  ////////// side effects for filtering click events
  ////////// ==========================

  useEffect(() => {
    animatedropdownA();
    if (animation.current.isActive()) {
      animation.current.restart();
    }

    document.addEventListener("click", handlemyExitDropdownA);
    return () => {
      document.removeEventListener("click", handlemyExitDropdownA);
    };
  }, []);

  useEffect(() => {
    animatedropdownB();
    if (animationB.current.isActive()) {
      animationB.current.restart();
    }

    document.addEventListener("mousedown", handlemyExitDropdownB);
    return () => {
      document.removeEventListener("mousedown", handlemyExitDropdownB);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      animation.current.reverse();
    } else {
      animation.current.play();
    }

    if (!isOpenYears) {
      animationB.current.reverse();
    } else {
      animationB.current.play();
    }
    // tlA.current.reversed(!isOpen);
  }, [isOpen, isOpenYears]);

  //animate dropdown B

  return (
    <>
      <div>        
        {/* <Dropdown   dddata={joblocation, locationsWithCounts, location }  /> */}
      </div>
     



        {/* start grid */}
        <section className="utility--filter">
                            <div className="filter__wapper ">

                            {/* <p>
                              the active ingredient/Location would be 
                              <strong>{activeLocation}</strong>

                            </p> */}
                                {/* <h1>this is the Years list to choose from</h1>
                          <p>
                            the active ingredient/year would be <strong>{activeYear}</strong>
                          </p> */}
                          {/* <div className="d__grid">
                            <Link to="/basePage">
                              <span className="copy__cat">All/latest </span>
                              <span className="copy__cat"> ( {jobs.nodes.length} )</span>
                            </Link>

                        
                          </div> */}

                              {/* <Link to="/basePage">
                                <span className="copy__cat">All Locations </span>

                                <span className="copy__cat"> ( {joblocation.nodes.length} )</span>
                              </Link> */}


                    {/* end active anotations */}
                              {/* start dropdown */}
                          
                              <div className="dropdown" ref={dropdownARef}>
                                <div
                                  className="dropdown-header"
                                  ref={refOutsideclickA}
                                  onClick={toggleDropdownLocation}
                                >
                                  {selectedItem ? (
                                    <span className="dropdown-header-status">{activeLocation}</span>
                                  ) : (
                                    "View all Locations"
                                  )}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`  icon ${isOpen && "open"}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </div>

                                <div className={`nav__categories   ${isOpen}`}>
                                  <Link
                                    to="/basePage"
                                    className="nav__categories__link"
                                    role="header bread crumb nav link"
                                  >
                                    <span className="copy__cat">show me all Locations</span>
                                    <span className="copy__cat">
                                      {" "}
                                      ( {joblocation.nodes.length} )
                                    </span>
                                  </Link>

                                  {locationsWithCounts.map((location) => (
                                    <Link
                                      to={`/location/${location.name}`}
                                      key={location.id}
                                      className="nav__categories__link"
                                      title={`${location.name} `}
                                    >
                                      <span className="copy__cat">{location.name} </span>

                                      <span className="copy__cat"> ( {location.count} )</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                                  {/* start dropdown */}
                            <div className="dropdown" ref={dropdownBRef}>
                              <div
                                className="dropdown-header"
                                ref={refOutsideclickB}
                                onClick={toggleDropdownYears}
                              >
                                {selectedItemYears ? (
                                  <span className="dropdown-header-status">{activeYear}</span>
                                ) : (
                                  "View work from all years"
                                )}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={` icon ${isOpenYears && "open"}`}
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>

                              <div className={`nav__categories  ${isOpenYears && "open"}`}>
                                <Link to="/basePage" className="nav__categories__link">
                                  <span className="copy__cat">show me jobs from all years</span>
                                  <span className="copy__cat"> ( {jobs.nodes.length} )</span>
                                </Link>

                                {yearsWithCounts
                                .sort(({ name: previousYear }, { name: currentYear }) =>  currentYear - previousYear) 
                                .map((year) => (
                                  <Link
                                    to={`/year/${year.name}`}
                                    key={year.id}
                                    className="nav__categories__link"
                                  >
                                    <span className="copy__cat">{year.name} </span>
                                    <span className="copy__cat"> ( {year.count} )</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                              {/* close dropdown */}
                            </div>
                            {/* close grid */}
                </section>
   
   
    
    </>

    // end
  );
}
