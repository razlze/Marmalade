//puffstarts
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../stylesheets/navBarStyles.css';
import profileImage from './Group.svg';
import logo from './marmalade-logo.svg';
import {Link} from "react-router-dom";

//making parent component for navigation bar
function NavigBar (props) {
    return(
        <div id='navigBar'>
            <div id="left">
                <div id="innerleft">
                    <div id="ourlogo">
                        <img src={logo} width="40" height="40"/>
                        <p id="ourCompanyName">Marmalade</p>
                    </div>

                    <CompanyTitle name="The Cool Company" />
                    <CodeBox code="IMOKCO" />
                </div>

                <div id="innerright">
                    <Link to="/positions" style={{height: '100%'}}><div className="navbutton" id="interviewsbutton">
                        <p>Positions</p>
                    </div></Link>
                    <Link to="/interviews" style={{height: '100%'}}><div className="navbutton" id="positionsbutton">
                        <p>Interviews</p>
                    </div></Link>
                    <div id="profilebutton">
                        <img src={profileImage} width='40' height='40' />
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

function CompanyTitle(props) {
    return (
        <div id="companyName">
            <p id="companyNameText">{props.name}</p>
        </div>
    );
}

function CodeBox(props) {
    return (
        <div id="codebox">
            <p id="code">{props.code}</p>
        </div>
    );
}


export default NavigBar 