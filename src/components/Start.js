import React from 'react';
//import { Login, Register } from './login/index.jsx';
import { Login } from "./login/login.jsx";
import { Register } from "./login/register.jsx";
import './login/Start.scss';
import firebase from './login/firebase.js';

const database = firebase.database();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
      console.log("signed in");
      if (window.location.href == 'https://cjrv-hackthecloud.web.app/start') {
        let hasCompany = false;
        var currentUser = firebase.auth().currentUser;
        var userId = currentUser.uid;
        database.ref().once('value').then(function(allData) {
          allData.forEach(function(company) {
            database.ref(company.key+"interviewers").once('value').then(function(interviewers) {
              interviewers.forEach(function(interviewer) {
                if (interviewer.key==userId) {
                  hasCompany = true;
                }
              });
            });
          });
        });
        if (hasCompany) {window.location.href = '/positions'}
        else {window.location.href = '/company'}
      }
  } else {
      console.log("not signed in");
  }
})

/*
export const loginUser = function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
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

export const registerUser = function() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((user) => {
      //var currentUser = auth.currentUser;
      //var userId = currentUser.uid;
      window.location.href = "/company"; //change later to company code page
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
  console.log('authTest: passed :D');
}
*/

export class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="Start">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
      
    </div>
  );
};

