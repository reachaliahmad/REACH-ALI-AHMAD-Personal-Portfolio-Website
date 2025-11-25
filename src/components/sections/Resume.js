import { Fragment } from "react";

const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>

        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>

            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">March 2023 - Present</div>
                <div className="name">Digital Marketing Specialist & Shopify Expert</div>
                <div className="company">Freelance / Clients</div>
                <p>
                  Building responsive, SEO-friendly Shopify and WordPress stores, integrating plugins, themes, and custom functionalities for optimized user experience.
                </p>
              </div>

              <div className="resume-item border-line-h">
                <div className="date">January 2023 - Present</div>
                <div className="name">Digital Marketing Specialist</div>
                <div className="company">Freelance Projects</div>
                <p>
                  Managing multi-channel campaigns, lead generation, and client engagement to improve online visibility and sales conversions.
                </p>
              </div>

              <div className="resume-item">
                <div className="date">July 2025 - Present</div>
                <div className="name">MERN Stack Developer (Learning)</div>
                <div className="company">IDEOVERSITY</div>
                <p>
                  Ongoing comprehensive Full Stack Development training covering MongoDB, Express.js, React.js, and Node.js for scalable web applications.
                </p>
              </div>
            </div>
          </div>

          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>

            <div className="resume-items">
              <div className="resume-item border-line-h">
                <div className="date">2025</div>
                <div className="name">Intermediate</div>
                <div className="company">KIPS College</div>
                <p>Completed Intermediate studies (Pre-Engineering/ICS)</p>
              </div>

              <div className="resume-item border-line-h">
                <div className="date">2023</div>
                <div className="name">Matric</div>
                <div className="company">Punjab School</div>
                <p>Completed Matriculation in Science</p>
              </div>

              <div className="resume-item">
                <div className="date">2025 - Present</div>
                <div className="name">Full Stack MERN Course</div>
                <div className="company">IDEOVERSITY</div>
                <p>
                  Practical learning of MERN stack development for real-world projects including database management, server-side development, and front-end design.
                </p>
              </div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default ResumeSection;
