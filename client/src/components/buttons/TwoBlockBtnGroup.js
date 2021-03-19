import React from "react";

const TwoBlockButtonGroup = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-12 mb-4">
          <button
            className="btn btn-light btn-block btn-lg"
            onClick={props.handleBtnOneClick}
          >
            {props.btnOneName}
          </button>
        </div>
        <div className="col-md-6 col-12">
          <button
            className="btn btn-outline-light btn-lg btn-block"
            onClick={props.handleBtnTwoClick}
          >
            {props.btnTwoName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoBlockButtonGroup;
