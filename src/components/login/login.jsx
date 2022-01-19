import React from "react";
import "./style.scss";
import loginImg from "./login.svg";
import {Link} from "react-router-dom";
import firebase from './firebase.js';

const loginUser = function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      //var currentUser = auth.currentUser;
      //var userID = currentUser.uid;
      console.log('work?');
      window.location.href = "/positions";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }


  /*
  //this is a method
  chickenIsCool() {
    const chicken = document.getElementById("username").value;
    const ticklevicki = document.getElementById("password").value;
    alert(chicken + " " + ticklevicki);
  }
  */
  
  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" id="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" id="password"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={loginUser}>
            Login
          </button>
        </div>
      </div>
    );
  }
}
/*
function chickenIsCool() {
  alert("poo");
  const chicken = document.getElementById("chicken").value;
  alert(chicken);
}*/