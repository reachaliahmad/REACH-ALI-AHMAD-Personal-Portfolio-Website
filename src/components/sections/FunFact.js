import { Fragment } from "react";

const FunFact = () => {
  return (
    <Fragment>
      <div className="content fuct">
        {/* title */}
        <div className="title">Fun Facts About Me</div>

        {/* content */}
        <div className="row fuct-items">
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-bicycle" />
              </div>
              <div className="name">Gym Enthusiast</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-laptop" />
              </div>
              <div className="name">Web Developer</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-shopping-bag" />
              </div>
              <div className="name">Shopify Expert</div>
            </div>
          </div>

          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-bullhorn" />
              </div>
              <div className="name">Digital Marketing</div>
            </div>
          </div>

          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default FunFact;
