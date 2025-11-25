import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quote</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                 He is highly reliable, communicates clearly, and delivers clean, well-structured code on time. I highly recommend Ali for any complex web development project.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="images/image1.jpg" alt="Ryan Adlard" />
                </div>
                <div className="info">
                  <div className="name">Ali Sheikh</div>
                  <div className="company">MERN Stack Developer</div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Quote;
