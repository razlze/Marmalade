import React, {useState} from 'react';
import '../stylesheets/positionsStyles.css';
import NavigBar from './Navbar.js';
import plusImage from './plus.svg';
import ReactModal from 'react-modal';
import Select from 'react-select';
import firebase from './login/firebase.js';
import {Link} from "react-router-dom";

//firebase stuff
//const database = firebase.database();
//let userCompany = 'IMOKCO';

const positions = [
    {
        name: 'IB Coordinator',
        candidates: ['John Powell', 'Hans Zimmer', 'Joe Hisaishi', 'Lin-Manuel Miranda', 'Alan Menken', 'Michael Giacchino'],
        interviewers: ['Razi Syed', 'Jenna Xiao', 'Hermione Granger'],
        choosingStarted: false,
        containsUser: false,
        color: '#9B36FF'       
    },
    {
        name: 'Graphic Designer',
        candidates: ['Tommy Butler', 'Nancy Tian', 'Poptropica', 'Chase Hudson', 'Charli Damelio'],
        interviewers: ['Jenna Xiao', 'Connie Wang', 'Victoria Li', 'Razi Syed'],
        choosingStarted: false,
        containsUser: true, 
        color: '#30BB3E'
    },
    {
        name: 'CMO',
        candidates: ['Peepee Poopoo Man', 'Nancy Tian'],
        interviewers: ['Jenna Xiao', 'Connie Wang'],
        choosingStarted: false,
        containsUser: false, 
        color: '#943042'
    },
    {
        name: 'Events Coordinator',
        candidates: ['Peepee Poopoo Man', 'Nancy Tian'],
        interviewers: ['Razi Syed','Hermione Granger'],
        choosingStarted: false,
        containsUser: false, 
        color: '#DA3C75'
    }
]

const interviewers = [
    {value: 'cool_kid', label: 'Victoria Li'}, 
    {value: 'jungalo', label: 'Jenna Xiao'},
    {value: 'chip_stock', label: 'Razi Syed'},
    {value: 'jenna_xiao', label: 'Connie Wang'},
    {value: 'jenna_xiaff', label: 'Harry Potter'},
    {value: 'jenna_xiaasdf', label: 'Hermione Granger'},
    {value: 'jenna_xiafdas', label: 'Ron Weasley'},
]

export class PositionDashboard extends React.Component {

    constructor(props) {
        super(props); 
        var handleModalClose = this.handleModalClose.bind(this);
        var handleModalOpen = this.handleModalOpen.bind(this);
        //var addPosition = this.addPosition.bind(this);


        this.state = {
            showPositionsModal: false,
        }
    }

    /*handleModalUpdate (modalState) {
        console.log(modalState);
        this.setState({showPositionsModal: modalState});
    }*/

    handleModalClose () {
        console.log("close");
        this.setState({showPositionsModal: false});
    }

    handleModalOpen () {
        this.setState({showPositionsModal: true});
    }
    
    addPosition = ()  => {
        console.log('hip');
        positions.push(
            {
                name: 'Marketing Director',
                candidates: [],
                interviewers: ['Connie Wang', 'Ron Weasley'],
                choosingStarted: false,
                containsUser: false, 
                color: '#369FFF'
            }
        );
        this.forceUpdate();
        this.handleModalClose();
    }

    render() {
        //var handleModalUpdate = this.handleModalUpdate;
        var handleModalClose = this.handleModalClose;
        var handleModalOpen = this.handleModalOpen;
        //var addPosition = this.addPosition;

        return (
            <div id="background">

                <div id="orangeBottomPart"></div>

                <NavigBar></NavigBar>

                <div id="mainContainer">
                    <p id="positionsTitle">Positions</p>
                    <PanelContainerContents handleModalOpen = {handleModalOpen.bind(this)} data={positions}/> 
                    
                    
                    <ReactModal closeTimeoutMS={500} className="modalmodal" overlayClassName="modaloverlay" onRequestClose={(this.handleModalClose).bind(this)} isOpen={this.state.showPositionsModal}>
                        <p className="modalTitle">Add Position</p>
                        <p className="formLabels">Name of position</p>
                        <input type="text" name="position]" className="positionNameInput"/>
                        <p className="formLabels">Interviews Assigned</p>
                        <Select
                            isMulti 
                            name="Interviewers" 
                            options={interviewers} 
                            closeMenuOnSelect={false} 
                            className="interviewersSelect" 
                            
                        />
                        <button className="modalSubmit" onClick={this.addPosition}>add position</button>    
                    </ReactModal>
                </div>
            </div>  
        );
    }
}

class PanelContainerContents extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let handleModalOpen = this.props.handleModalOpen;
        document.getElementById('addPositionPanel').addEventListener("click", () => {
            handleModalOpen(true);
        });
    }
    
    render() {
        let list = [];

        for(let i = 0; i <= positions.length; i++) {
            if(i == 0){
                list.push(
                    <div id="addPositionPanel">
                        <div id="yomama">
                            <img id="plusImage" src={plusImage} width="30" height="30"/>
                            <p id="addPositionText">add position</p>
                        </div>
                    </div>
                )
                
            } else {
                list.push(<PositionPanels name={positions[i-1].name} candidates={positions[i-1].candidates} interviewers={positions[i-1].interviewers} color={positions[i-1].color}/>)
            }
        }


        return (
            <div id="panelContainer">
                {list}
            </div>
        );  
    }
}

/*class AddPositionPanel extends React.Component {
    constructor(props){
        super(props);   `


    }

    componentDidMount () {
        let handleModalUpdate = this.props.handleModalUpdate;
        document.getElementById('addPositionPanel').addEventListener("click", () => {
            handleModalUpdate(true);
        });
    }

    componentWillUnmount () {

    }

    render() {
        return (
            <div id="addPositionPanel">
                <div id="yomama">
                    <img id="plusImage" src={plusImage} width="30" height="30"/>
                    <p id="addPositionText">add position</p>
                </div>
            </div>
        );
    }
}*/

class PositionPanels extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let list = [];

        for(let i = 0; i < this.props.interviewers.length; i++){
            list.push(<p>{this.props.interviewers[i]}</p>)
        }

        return (
            <Link to="/individualposition"><div id="positionPanel">
                <div className="positionPanelHeader" style={{backgroundColor: this.props.color}}>
    
                    <p className="positionPanelTitle">{this.props.name}</p>
                    <p className="positionPanelNumberCandidates">{this.props.candidates.length} Candidates</p>
                </div>
    
                <div className="positionPanelFooter">
                    <p className="positionPanelInterviewersLabel">Interviewers:</p>
                    <div className="positionPanelInterviewersContainer"> 
                        {list}
                    </div>
                </div>
            </div></Link>
        );
    }
}
