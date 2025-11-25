import { Fragment } from "react";
const bio_ = ` <p>
<strong>I’m Ali Ahmad — a Shopify Expert, Digital Marketer, and Front-End Developer (Learning MERN Stack).

I have 1–1.5 years of hands-on experience in Shopify store development, product management, theme customization, and running high-converting digital marketing campaigns. I specialize in creating clean, responsive stores with optimized product pages and effective conversion strategies.

I’m also a fresh Front-End Developer, currently learning the complete MERN stack to expand my skills in modern web development. I work with HTML, CSS, JavaScript, and React, and I’m actively building projects to master full-stack development.
</p>`;
const AboutMe = ({ bio }) => {
  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio ? bio : bio_ }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Age . . . . .</strong> 19
                </li>
                <li>
                  <strong>Residence . . . . .</strong> Pakistan
                </li>
                <li>
                  <strong>Freelance . . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . . .</strong> Lahore, Pakistan
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;

export const AboutMeClassic = () => {
  return (
    <div className="content about">
      {/* title */}
      <div className="title">About Me</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="text-box">
            <p>
             I’m Ali Ahmad — a Shopify Expert, Digital Marketer, and Front-End Developer (Learning MERN Stack).

I have 1–1.5 years of hands-on experience in Shopify store development, product management, theme customization, and running high-converting digital marketing campaigns. I specialize in creating clean, responsive stores with optimized product pages and effective conversion strategies.

I’m also a fresh Front-End Developer, currently learning the complete MERN stack to expand my skills in modern web development. I work with HTML, CSS, JavaScript, and React, and I’m actively building projects to master full-stack development.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 19
              </li>
              <li>
                <strong>Residence . . . . .</strong> Pakistan
              </li>
              <li>
                <strong>Freelance . . . . .</strong> Available
              </li>
              <li>
                <strong>Address . . . . .</strong> Lahore, Pakistan
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
