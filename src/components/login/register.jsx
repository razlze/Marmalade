import React from "react";
import "./style.scss";
import loginImg from "./login.svg";
import {Link} from "react-router-dom";
import firebase from './firebase.js';

const database = firebase.database();

database.ref('poopoo').set('poopoo');

function registerUser() {  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let name = document.getElementById('fullname').value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      var currentUser = firebase.auth().currentUser;
      var userId = currentUser.uid;
      firebase.database().ref('unassigned/'+userId).set(name);
      window.location.href = "/company";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  console.log('authTest: passed :D');
}

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input type="text" name="fullname" placeholder="eg. George Washington" id='fullname'/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" id='email'/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" id='password'/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="regBtn btn" onClick={registerUser}>
            Register
          </button>
        </div>
      </div>
    );
  }
}