import React from "react";

const Demo = () => {
  return (
    <div>
      <div className="row bg-success g-0 ">
        <div
          className="col-md-3 col-sm-6 bg-primary"
          style={{ width: "100rem" }}
        >
          <div class="card" style={{ width: "100npm srem" }}>
            <img class="card-img-top" alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 bg-secondary">
          <div className="col-md-3 col-sm-6 bg-primary">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  bg-danger">
          <div className="col-md-3 col-sm-6 bg-primary">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6  bg-gradient">
          <div
            className="col-md-3 col-sm-6 bg-primary"
            style={{ width: "18rem" }}
          >
            <div class="card">
              <img class="card-img-top" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
