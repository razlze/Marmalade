import React from 'react';
import NavigBar from './Navbar.js';
import '../stylesheets/interviews.css';
import NumericInput from 'react-numeric-input';
import {Link} from "react-router-dom";
import candidate1 from './candidate1.svg';
import candidate2 from './candidate2.svg';
import candidate3 from './candidate3.svg';
import candidate4 from './candidate4.svg';
import candidate5 from './candidate5.svg';

export class Interviews extends React.Component {
    render() {
        return(
            <div>
                <NavigBar></NavigBar>
                <table id="format-table">
                    <tr>
                        <td id="small-cell">
                            <p id="interviewPageTitle">Interviews Assigned To You</p>
                            <div id="imageContainer">
                                <img src={candidate1} className="small-candidates"/>
                                <img src={candidate2} className="small-candidates"/>
                                <img src={candidate3} className="small-candidates"/>
                                <img src={candidate4} className="small-candidates"/>
                                <img src={candidate5} className="small-candidates"/>
                            </div>
                        </td>
                        <td id="big-cell">
                            <div className="notes">
                                <div className="white-area">
                                    <div className="white-text-area">
                                        <h1 id="candidate-name">
                                            Jacob Collier
                                        </h1>
                                        <br></br>
                                        <button className="candidate-position">
                                            <p id="position-name">IB Coordinator</p>
                                        </button>
                                        <br></br>
                                        <a href="" id="description-role">description of role</a><br></br><br></br>
                                        <p className="interview-text">Interview Time</p>
                                        <p className="time">12 July 2021, 12:30</p>
                                    </div>
                                </div>
                                <div className="coloured-area">
                                    <div className="coloured-text-area">
                                        <p className="notes-text">NOTES</p>
                                        <textarea rows = "14" cols = "40" name = "description">
                                        </textarea>
                                        <div id="horizontalBottom"> 
                                            <div id="scorebox">
                                                <p>SCORE</p>
                                                <NumericInput min={0} max={10} value={5} />
                                            </div>
                                            <Link to="/positions" style={{width: '40%', marginLeft: '5%'}}><button id="doneButton">DONE</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}