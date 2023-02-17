import React from "react";
// import useForm from "./useForm";
// import validate from "./LoginFormValidationRules";
// import { Redirect, useHistory } from "react-router-dom";
import logo from './components/logo.png';

  function handleForgot() {
    // console.log("forgot");
    // history.push("/forgotpassword");
  }

function Dashboard() {
  return (
    <header style={ HeaderStyle }>
    <div className="section is-fullheight">
      {/* {loggedIn && <Redirect to="/default" />} */}
      <div className="container">
        <div className="column is-6 is-offset-3">
          <div className="box">
          <img src={logo} alt="jokautils" style={{  width: "30%", marginLeft:"auto",marginRight:"auto", display:"block"}}></img>
          <div style={ BoxStyle }>
            <h1 style={{marginBottom: "0px"}}>Joka Utils</h1>
          </div>
              <div style={ BoxStyle }
                className="is-underlined has-text-link"
                onClick={handleForgot}
              >
                {" "}
                Joka Directory
              </div>
          </div>
        </div>
      </div>
    </div>
    </header>
  );
}

export default Dashboard;


const HeaderStyle = {
  width: "100%",
  height: "100vh",
  // background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
}
const BoxStyle = {
  textAlign: "center",
  marginBottom: "20px"
}
