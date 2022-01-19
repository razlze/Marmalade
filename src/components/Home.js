import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/Home.css';
import './login/Start.scss';
import './login/style.scss';
import titleImg from './title.svg';


//parent component (highest component)
//puffstarts 
export class Home extends React.Component {
    
    render() {
        return (
            <div>
                <div class = "blank-block">
                </div>
                <div class = "orangeness">
                    <img src={titleImg} id="titleImg"/><br></br><br></br>
                    <Link to="/start"><button class="startBtn btn">start</button></Link>
                </div>
            </div>  
        );
    }
}