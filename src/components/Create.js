import React from 'react';
import joinBox from './login/joinImg.svg';
import slantImg from './login/slant.svg';
import './login/Join.css';
import {Link} from "react-router-dom";
import firebase from './login/firebase.js';

const database = firebase.database();

function createCompany() {
  let companyName = document.getElementById('company').value;
  var currentUser = firebase.auth().currentUser;
  var userId = currentUser.uid;
  var codeIsUnique = false;

  database.ref().once('value').then(function(firstGenData) {
    let code = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    while (!codeIsUnique) {
      code = '';
      for(let i = 0; i < 6; i++) {
        code += characters[(Math.floor(Math.random() * characters.length))];
      }
      if (!firstGenData.hasChild(code)) {
        codeIsUnique = true;
      }
    }
    
    database.ref('unassigned/'+userId).once('value').then(function(userName) {
      let name = userName.val();
      console.log(name);
      database.ref(code).set({
        name: companyName,
        interviewers: {
          [userId]: name
        }
      });
      database.ref('unassigned/'+userId).remove();
      window.location.href = "/positions";
    });
  });
  
}

export class Create extends React.Component {
  render() {
      return (
        <div className = "bigger-container">
          {/*<img src={joinBox} id="joinBox"/>*/}
          <div className = "create-container small-container">
            <input type="text" name="company" placeholder="Enter company name" id="company"/><br></br><br></br>
            <button type="button" className="joinBtn btn" onClick={createCompany}>create company</button>
          </div>
          <div className = "slantImg">
            <img src={slantImg}/>
          </div>
        </div>
      );
  }
}

export default Create;