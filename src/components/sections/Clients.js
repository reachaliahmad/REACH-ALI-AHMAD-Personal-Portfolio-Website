import { Fragment } from "react";
const Clients = () => {
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Clients</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/express.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/mongo.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/node.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          {/* client item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="client-item">
              <div className="image">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com"
                >
                  <img src="images/react.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
