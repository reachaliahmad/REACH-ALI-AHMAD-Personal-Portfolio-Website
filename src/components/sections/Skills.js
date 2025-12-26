import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        <div className="title">My Skills</div>
        <div className="row">
          {/* Design & Marketing */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon"><i className="fa fa-paint-brush" /></div>
                <div className="name">Design & Marketing</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Web Design</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Digital Marketing</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Content Writing</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Shopify Store Setup</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "95%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Languages */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon"><i className="fa fa-flag" /></div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Urdu</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "100%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Punjabi</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Development */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon"><i className="fa fa-code" /></div>
                <div className="name">Development</div>
              </div>
              <ul>
                <li>
                  <div className="name">Shopify</div>
                  <div className="progress p85">
                    <span>85%</span>
                    <Slice />
                  </div>
                </li>
                <li>
                  <div className="name">HTML / CSS</div>
                  <div className="progress p95">
                    <span>95%</span>
                    <Slice />
                  </div>
                </li>
                <li>
                  <div className="name">JavaScript / ReactJS</div>
                  <div className="progress p80">
                    <span>80%</span>
                    <Slice />
                  </div>
                </li>
                <li>
                  <div className="name">MERN Stack Learning</div>
                  <div className="progress p60">
                    <span>80%</span>
                    <Slice />
                  </div>
                </li>
          <li>
                  <div className="name">Digital Marketing</div>
                  <div className="progress p90">
                    <span>90%</span>
                    <Slice />
                  </div>
                </li>
                <li>
                  <div className="name">Social Media Management</div>
                  <div className="progress p85">
                    <span>85%</span>
                    <Slice />
                  </div>
                </li>
                 <li>
                  <div className="name">Express/Nodejs</div>
                  <div className="progress p85">
                    <span>75%</span>
                    <Slice />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Knowledge */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon"><i className="fa fa-list" /></div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>Website Hosting</li>
                <li>Front-end Development</li>
                 <li>Back-end Development</li>
                 <li>Mern-Stack Development</li>
                <li>Digital Marketing Strategies</li>
                <li>Shopify Store Setup</li>
                <li>SEO & Social Media Marketing</li>
                <li>Client Communication</li>
                <li>Project Management</li>
              </ul>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
