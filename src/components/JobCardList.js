import React, { useState, useRef, useEffect } from "react";

import gsap from "gsap"; 
// gsap config toggle for testing
gsap.config({ nullTargetWarn: false });

// =====================================
//start
// single job component for use in grid and to sort job by years
// =====================================

function SingleJobItem({ data, job }) {
  // set refs for animation triggers

  let animationC = useRef(null);
  let animationCClose = useRef(null);
  let animationCParent = useRef(null);

  // set states for show/hide state hooks
  const [showReadmore, setShowReadmore] = useState(null);
  const [showSkills, setShowSkills] = useState(null);

  // end register if fields are empty

  var val = Math.floor(1000 + Math.random() * 9000);


  let animateReadMore = () => {
    animationC.current = gsap.timeline().to(animationCParent.current, {
      height: "auto",
      duration: 0.5,
      ease: "Expo.easeInOut",
    });

    return () => {
      animationC.current.kill();
    };
  };

  const handleonClickReadMore = () => {
    setShowReadmore(!showReadmore);
    console.log("is open");
  };

  const handleClickOutofBounds = (e) => {
    if (!animationCClose.current.contains(e.target)) {
      setShowReadmore(false);
      console.log("is closed");
    }
  };

  useEffect(() => {
    // check if fields are empty functions

    animateReadMore();
    if (animationC.current.isActive()) {
      animationC.current.restart();
    }
    //register outerclick here
    document.addEventListener("mouseup", handleClickOutofBounds);
    return () =>
      document.removeEventListener("mouseup", handleClickOutofBounds);
  }, []);

  useEffect(() => {
    if (!showReadmore) {
      animationC.current.reverse();
    } else {
      animationC.current.play();
    }
  }, [showReadmore]);

  return (
    <div
      className="ticket"
      ref={animationCClose}
      onClick={handleonClickReadMore}
    >
      <aside className="ticket-sub">
        <h3 className="ticket-sub__title">Admit one</h3>
        <p className="ticket-sub__serial">No 06900666 </p>
      </aside>

      <div className="ticket-main">
        <section className="ticket-seat">
          <h3 className="ticket-seat__title">sector: web development</h3>
          <div className="ticket-seat-box">
            <p className="ticket-seat-box__subtitle">Year</p>
            <h4 className="ticket-seat-box__title">
              {job.jobyear.map((year) => year.name).join(", ")}{" "}
            </h4>
          </div>
          <div className="ticket-seat-box">
            <p className="ticket-seat-box__subtitle">Role</p>
            <h4 className="ticket-seat-box__title">Contract</h4>
          </div>
          <div className="ticket-seat-box">
            <p className="ticket-seat-box__subtitle">Skill</p>
            <h4 className="ticket-seat-box__title">Front-End</h4>
          </div>
        </section>
        <section className="ticket-info">
          <div className="ticket-info-brand">
            <h3 className="copy__job-title">{job.namecompany}</h3>
            {/* <!-- <h3 className="copy__job-title">asdfasfSpring Studios</h3> --> */}
          </div>
          <div className="ticket-info-brawler">
            <div className="brawler">
              <span className="brawler__subtitle">From</span>
              <span className="brawler__title">
                {job.startmonth.map((job) => job.name)}
              </span>
            </div>
            <div className="separator">
              <div className="flip-this">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon__svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </div>
            <div className="brawler">
              <span className="brawler__subtitle">To</span>
              <span className="brawler__title">
                {job.endingmonth.map((job) => job.name)}
              </span>
            </div>
          </div>
          {/* <!-- company overview profile --> */}
          <div className="ticket-info-referee">
            <span className="ticket-info-referee__title">
              Company Profile:{" "}
            </span>
            <span className="ticket-info-referee__subtitle">
              {job.companyoutline}
            </span>
          </div>

          <div className="ticket-info-date">
            <div className={`copy__readmore`} ref={animationCParent} aria-pressed="false" role="button">
              {showReadmore ? (
                <div className="icon__plus  minus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon__svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              ) : (
                <div className="icon__plus">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon__svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              )}

              {/* end icon switch */}

              <div className={`${showReadmore}`} >
                <p className="copy__description-role">
                  <strong className="copy__bold-subtitle">
                    Project Outline:{" "}
                  </strong>
                  <div dangerouslySetInnerHTML={{ __html: job.roleoverview }} />
                </p>

                <p className="copy__description-role">
                  <strong className="copy__bold-subtitle">
                    Skills Applied:{" "}
                  </strong>
                  <span
                    dangerouslySetInnerHTML={{ __html: job.skillsapplied }}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="ticket-info-date2">
            <p className="copy__barcode-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          </div>
          <div className="ticket-info-misc">
            <p className="utility--mb-05">
              <strong>Location</strong>
            </p>

            <div>
              {" "}
              {job.joblocation.map((job, index) => (
                <p className="copy__ticket__location">{job.name} </p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/*  card time line  */}

      <aside className="ticket__timeline">
        <div className="ticket__timeline__marker">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ticket__timeline__marker__icon flip-this"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="ticket__timeline__line"></div>

     
      </aside>

      {/* <!-- close ticket wrapper --> */}
    </div>
  );
}
// =====================================
// end single job item

// grid component list of jobs
export default function JobCardList({ countAllJobs }) {
  return (
    <>
      {/* <i>there are {countAllJobs.length} yay in this component list </i> */}

      <div className="ticket__wrapper">
        {countAllJobs.map((job) => (
          <SingleJobItem job={job} key={job.id} />
        ))}
       {/* <div className="timeline__end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon__svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clip-rule="evenodd"
            />
          </svg>
        </div> */}
       
      </div>
    

      {/* ///add footer here */}

   
    </>
  );
}
