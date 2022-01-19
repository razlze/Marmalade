import React from 'react';
import joinBox from './login/joinImg.svg';
import slantImg from './login/slant.svg';
import './login/Join.css';
import {Link} from "react-router-dom";
import firebase from './login/firebase.js';

const database = firebase.database();

function joinCompany() {
  let code = document.getElementById('code').value;
  let name;
  var currentUser = firebase.auth().currentUser;
  var userId = currentUser.uid; 
  database.ref('unassigned/'+userId).once('value').then(function(userName) {
    name = userName.val();
    console.log(name);
    database.ref(code+'/interviewers/'+userId).set(name);
    database.ref('unassigned/'+userId).remove();
    window.location.href = "/positions";
  });
}

export class Join extends React.Component {
  render() {
      return (
        <div className = "bigger-container">
          {/*<img src={joinBox} id="joinBox"/>*/}
          <div className = "small-container">
            <input type="text" id="code" name="code" placeholder="Enter Code" maxlength="6"/><br></br><br></br>
            <button type="button" className="joinBtn btn" onClick={joinCompany}>join company</button>
          </div>
          <div className = "slantImg">
            <img src={slantImg}/>
          </div>
        </div>
      );
  }
}

export default Join;