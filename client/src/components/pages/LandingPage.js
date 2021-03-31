import React, { useState } from "react";
import LoginForm from "../forms/LoginForm";
import RegisterForm from "../forms/RegisterForm";
import "./LandingPage.css";
import sneaker from "../../images/SneakerLogoFinal.png";
import head from "../../images/HeadLogoFinal.png";
import TwoBlockButtonGroup from "../buttons/TwoBlockBtnGroup";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LandingPage = ({ history }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [message, setMessage] = useState('');
  


  return (
    <div className="landing-page-background">
      <div className="landing-page-content-container text-center">
        <div className="">
          <img
            src={sneaker}
            alt="website-logo"
            className="landing-page-sneaker img-fluid"
          />
          <img
            src={head}
            alt="website-logo"
            className="landing-page-head img-fluid"
          />

          {isLogin && (
            <LoginForm
              handleCancelClick={() => setIsLogin(false)}
              history={history}
              message={message}
            />
          )}
          {isRegister && (
            <RegisterForm
              goToLogin={() => setIsLogin(true)}
              closeRegisterForm={() => setIsRegister(false)}
              handleCancelClick={() => setIsRegister(false)}
              handleSuccess={(registerMessage) => setMessage(registerMessage)}
            />
          )}
          {!isLogin && !isRegister && (
            <div className="mt-5">
              <TwoBlockButtonGroup
                btnOneName="Login"
                btnTwoName="Register"
                handleBtnOneClick={() => setIsLogin(true)}
                handleBtnTwoClick={() => setIsRegister(true)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
