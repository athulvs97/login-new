import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect} from "react-router-dom";
import BackgroundImage from './components/background.jpg';
import logo from './components/logo.png';

const Form = (props) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  // const history = useHistory();
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }
  function handleForgot() {
    console.log("forgot");
    window.location.replace('http://ec2-43-204-240-96.ap-south-1.compute.amazonaws.com/passwordResetApp#/');
    // history.push("/forgotpassword");
  }

  return (
    <header style={ HeaderStyle }>
    <div className="section is-fullheight">
      {loggedIn && <Redirect to="/default" />}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
          <img src={logo} alt= "jokauth" style={{  width: "30%", marginLeft:"auto",marginRight:"auto", display:"block"}}></img>
          <div style={ BoxStyle }>
            <h1 style={{marginBottom: "0px"}}>Joka Auth</h1>
            IIM Calcutta's Central Authentication service
          </div>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    autoComplete="off"
                    className={`input ${errors.email && "is-danger"}`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button
                type="submit"
                className="button is-block is-info is-fullwidth"
              >
                Login
              </button>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleForgot}
              >
                {" "}
                Forgot password
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
};

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
const BoxStyle = {
  textAlign: "center",
  marginBottom: "20px"
}
export default Form;
