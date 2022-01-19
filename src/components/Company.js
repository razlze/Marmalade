
import React from 'react';
import createImg from './login/create.svg';
import joinImg from './login/join.svg';
import slantImg from './login/slant.svg';
import './login/Company.css';
import {Link} from "react-router-dom";


export class Company extends React.Component {
  render() {
      return (
        <div className = "big-container">
          <div className = "container">
            <Link to="/create"><button type="button" className="btn">
              <img src={createImg}/>
            </button></Link><br></br>
            <Link to="/join"><button type="button" className="btn">
              <img src={joinImg}/>
            </button></Link>
          </div>
          <div className ="slantImg">
            <img src={slantImg}/>
          </div>
        </div>
      );
  }
}

export default Company;