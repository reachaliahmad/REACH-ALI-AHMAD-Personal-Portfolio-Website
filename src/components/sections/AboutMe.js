import { Fragment } from "react";
const bio_ = ` <p>
<strong>I’m Ali Ahmad — a Shopify Expert, Digital Marketer, and MERN Stack Developer.

With 1–1.5 years of hands-on experience, I develop and customize Shopify stores, manage products, and run digital marketing campaigns that convert. I create clean, responsive stores and optimized product pages for maximum impact.

Currently, I’m fully focused on mastering the MERN stack, building real-world projects with MongoDB, Express, React, and Node.js to become a skilled full-stack developer delivering practical and scalable web solutions.
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
                  <strong>Age . . . . .</strong> 20
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
             I’m Ali Ahmad — a Shopify Expert, Digital Marketer, and MERN Stack Developer.

With 1–1.5 years of hands-on experience, I develop and customize Shopify stores, manage products, and run digital marketing campaigns that convert. I create clean, responsive stores and optimized product pages for maximum impact.

Currently, I’m fully focused on mastering the MERN stack, building real-world projects with MongoDB, Express, React, and Node.js to become a skilled full-stack developer delivering practical and scalable web solutions.
            </p>
          </div>
          <div className="info-list">
            <ul>
              <li>
                <strong>Age . . . . .</strong> 20
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
