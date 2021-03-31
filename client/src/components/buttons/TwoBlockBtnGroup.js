import React, { useState } from "react";

const TwoBlockButtonGroup = (props) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const handleClick = () => {
    setIsDisabled(true);
    props.handleBtnTwoClick();
  }

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
            className= "btn btn-outline-light btn-lg btn-block"
            disabled = {isDisabled}
            onClick={handleClick}
          >
            {props.btnTwoName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoBlockButtonGroup;
