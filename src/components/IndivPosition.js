import React from 'react';
import Navbar from './Navbar.js';
import '../stylesheets/indivPositionStyles.css';
import firebase from './login/firebase.js';
import cvIcon from "./cvIcon.svg";
import ReactModal from 'react-modal';
import moreInfoIcon from './moreInfoIcon.svg';
import notesIcon from './notesIcon.svg';
import clockIcon from './clockIcon.svg';
import checkBox from './checkBox.svg';
import titles from './titles.svg';
import addCan from './addCan.svg';
import addFile from './addfile.svg';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';



/*firebase stuff
const database = firebase.database();
let userCompany = 'IMOKCO';
let positionID = '-MeLLymfXfrvpraOVvZV';

var companyData = {};
database.ref(userCompany).on('value', (snapshot) => {
  companyData = snapshot.val();
  console.log('inside'); 
})

database.ref(userCompany).get().then(function(snapshot) {
  companyData = snapshot.val();
  console.log('inside');
});
*/

//data
const cjrvShuJu = {
    interviewers: {
      interviewer1: "Razi Syed",
      interviewer2: "Connie Wang",
      interviewer3: "Jenna Xiao",
      interviewer4: "Victoria Li",
      interviewer5: "Harry Potter",
      interviewer6: "Ron Weasley",
      interviewer7: "Hermione Granger"
    },
//CHANGING DATES OF INTERVIEWS jenna vicky
    positions: {
        position1: {
        candidates: {
            can1: {
              chosen: false,
              complete: false,
              interviewTime: "12 July 2021, 9:30",
              sliverCol: {backgroundColor: "#40DE50"},
              name: "John Powell",
              notes : "",
              rating : "---"
            },
            can2 : {
              chosen: false,
              complete: false,
              interviewTime: "13 July 2021, 11:30",
              sliverCol: {backgroundColor: "#40DE50"},
              name: "Hans Zimmer",
              notes: "",
              rating: "---"
            },
            can3: {
              chosen: false,
              complete: false,
              interviewTime: "18 July 2021, 14:15",
              sliverCol: {backgroundColor: "#F5E235"},
              name: "Joe Hisaishi",
              notes: "",
              rating: "---"
            },
            can4: {
              chosen: false,
              complete: false,
              interviewTime: "22 July 2021, 10:00",
              sliverCol: {backgroundColor: "#F5E235"},
              name: "Lin-Manuel Miranda",
              notes: "",
              rating: "---"
            },
            can5: {
              chosen: false,
              complete: false,
              interviewTime: "27 July 2021, 13:30",
              sliverCol: {backgroundColor: "#F5E235"},
              name: "Alan Menken",
              notes: "",
              rating: "---"
            },
            can6: {
              chosen: false,
              complete: false,
              interviewTime: "30 July 2021, 14:15",
              sliverCol: {backgroundColor: "#F5E235"},
              name: "Michael Giacchino",
              notes: "",
              rating: "---"
            },
            
          },
          colour: "#9B36FF",
          interviewers: ['interviewer1', 'interviewer3', 'interviewer7'],
          title: "IB Coordinator"
        }
    }
}

let cjrvShuJuCopy = cjrvShuJu;
/*for CEO second page, completed interviews
function filterChosen() {
    let simple = cjrvShuJuCopy.positions.position1.candidates;
    cjrvShuJuCopy = {
    }
}*/


//puffstarts
export class IndivPosition extends React.Component {
    constructor(props) {
        super(props);
        var handleModalClose = this.handleModalClose.bind(this);
        var handleModalOpen = this.handleModalOpen.bind(this);
        this.state = {chosen: true, upcoming: true, nextDays: true, done: true, modalShown: false};
    }

    handleModalClose () {
        this.setState({modalShown: false});
    }

    handleModalOpen () {
        this.setState({modalShown: true});
    }

    render() {
        var handleModalClose = this.handleModalClose;
        var handleModalOpen = this.handleModalOpen;

        return (
            <div>
                <Navbar/>
                <HeaderInfo numCandidates='6' title="IB Coordinator" handleModalOpen={handleModalOpen.bind(this)}/>
                <table id='structureTable'>
                    <tr>
                        <td id='tableLeft'>
                            <Description/> 
                        </td>
                        <td rowSpan="2" id='tableRight'>
                            <CandidatesList/>
                        </td>
                    </tr>
                    <tr>
                        <td style={{paddingRight: '5%', paddingTop: '2%'}}>
                            <FilterBox/>
                        </td>
                    </tr>
                </table>
                <ReactModal closeTimeoutMS={500} className="modalActual" overlayClassName="modalOverlay" onRequestClose={(this.handleModalClose).bind(this)} isOpen={this.state.modalShown}>
                    <p className="modalTitle">Add Candidate</p>
                    <p className="formLabels">Name of Candidate</p>
                    <input type="text" name="candidate" className="positionNameInput"/>
                    <p className="formLabels">Time of Interview</p>
                    {/*<input type="text" name="candidate" className="positionNameInput"/>*/}
                    <DateTimePickerComponent id="datetimepicker" placeholder="Select a date and time"/>
                    <img src={addFile} id="addFileImage" />
                    <button id="addCan">add candidate</button>
                </ReactModal>
            </div>
        );
    }
}

//interviewees objects uhohpuff: in case declaring with constant causes bugs

//interviewers for interviewer box 


//component for list of interviewees   
class CandidatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = cjrvShuJu;
    }

    /*componentDidMount() {

        database.ref(userCompany).on('value', (snapshot) => {
          this.setState(snapshot.val()); 
          console.log('inside');
        });
      }*/ 

    render() {
        let list = [];
        let shortened = this.state.positions.position1.candidates;
        let array = Object.keys(shortened);
        list.push(<SingleCandidate name={'Jacob Collier'} time={'12 July 2021, 12:30'} score={'---'} sliverColor={{backgroundColor: '#40DE50'}}/>);

        //for loop missing here! with single candidates and assigning their props
        for(let i = 0; i < array.length; i++) {
            list.push(<SingleCandidate name={shortened[`${array[i]}`].name} time={shortened[`${array[i]}`].interviewTime} score={shortened[`${array[i]}`].rating} sliverColor={shortened[`${array[i]}`].sliverCol}/>);
        }

        

        return(
            <div style={{textAlign: "left"}}>
                <img src={titles} id="titles"/>
                {list}
            </div>
        );
    }
}


class SingleCandidate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {buttonText: 'CHOOSE', buttonId: 'chooseCandidateButton'};
        this.changeButtonText = this.changeButtonText.bind(this);
    }

    changeButtonText() {
        let newText = this.state.buttonText === 'CHOOSE' ? 'UNPICK' : 'CHOOSE';
        let newId = this.state.buttonText === 'CHOOSE' ? 'unpick' : 'chooseCandidateButton';
        this.setState({buttonText: newText, buttonId: newId});
    }
    /*text of button, style of button, one of the object values*/ 
    render() {
        
        return(
            <div id="candidateBox">
                <table id="testingTable">
                    <tr className="tableRowCandidate">
                        <td style={{width: "15px"}, this.props.sliverColor}></td>
                        <td style={{width: "180px", textAlign: "left"}}>
                            <h1 id="headerName">{this.props.name}</h1>
                        </td>
                        <td style={{width: "50px", textAlign: "center"}}><button id='cvIcon'><img src={cvIcon}/></button></td>

                        <td style={{width: "90px", textAlign: "center"}}><p>{this.props.score}</p></td>
                        <td style={{width: "50px"}}><img src={clockIcon} id="clockIcon"/></td>
                        <td style={{width: "170px", textAlign: "left"}}><h2 id="interviewTime">{this.props.time}</h2></td>
                        <td style={{width: "50px"}}><img src={notesIcon} id="notesIcon"/></td>
                        <td style={{width: "140px"}}><button id={this.state.buttonId} onClick={this.changeButtonText}>{this.state.buttonText}</button></td>
                        <td style={{width: "50px", textAlign: "left"}}><button id="moreInfoButton"><img src={moreInfoIcon}/></button></td>
                    </tr>
                </table>   
            </div>   
        );
    }
}


//side div with filter
class FilterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            chosen: {
                backgroundColor: '#FF9A3D',
                borderColor: '#FF9A3D'
            },
            upcoming: {
                backgroundColor: '#F5E235',
                borderColor: '#F5E235'
            },
            nextDays: {
                backgroundColor: '#40DE50',
                borderColor: '#40DE50'
            },
            done: {
                backgroundColor: '#FF5252',
                borderColor: '#FF5252'
            }
        };
        this.toggleChosenButton = this.toggleChosenButton.bind(this);
        this.toggleUpcoming = this.toggleUpcoming.bind(this);  
        this.toggleNextDays = this.toggleNextDays.bind(this);
        this.toggleDone = this.toggleDone.bind(this);     
    }

    toggleChosenButton() {
        const newCol = this.state.chosen.backgroundColor !== 'white' ? 'white' : '#FF9A3D';
        this.setState({chosen:{backgroundColor: newCol, borderColor: '#FF9A3D'}});
    }

    toggleUpcoming() {
        const newCol = this.state.upcoming.backgroundColor !== 'white' ? 'white' : '#F5E235';
        this.setState({upcoming:{backgroundColor: newCol, borderColor: '#F5E235'}});
    }

    toggleNextDays() {
        const newCol = this.state.nextDays.backgroundColor !== 'white' ? 'white' : '#40DE50';
        this.setState({nextDays: {backgroundColor: newCol, borderColor: '#40DE50'}});
    }

    toggleDone() {
        const newCol = this.state.done.backgroundColor !== 'white' ? 'white' : '#FF5252';
        this.setState({done: {backgroundColor: newCol, borderColor: '#FF5252'}});
    }

    render() {
        return(
            <div id='filterBox'>
                <table style={{paddingBottom: '35px'}}>
                    <th style={{color: '#C5C5C5'}}>FILTERS</th>
                    <tr style={{height: "0px", padding: '0px', width: '15px'}}>
                        <td style={{textAlign: "center"}}><button className="checkButton" style={this.state.chosen} onClick={this.toggleChosenButton}></button></td>
                        <td><p id="text-check">Chosen</p></td>
                        {/*insert coloured icon as img, toggle source*/}
                    </tr>
                    <tr style={{height: "15px"}}>
                        <td style={{textAlign: "center"}}><button className="checkButton" style={this.state.nextDays} onClick={this.toggleNextDays}></button></td>
                        <td><p id="text-check">Next 3 days</p></td>
                    </tr>
                    <tr style={{height: "15px"}}>
                        <td style={{textAlign: "center"}}><button className="checkButton" style={this.state.upcoming} onClick={this.toggleUpcoming}></button></td>
                        <td><p id="text-check">Upcoming</p></td>
                    </tr>
                    <tr style={{height: "15px"}}>
                        <td style={{textAlign: "center"}}><button className="checkButton" style={this.state.done} onClick={this.toggleDone}></button></td>
                        <td><p id="text-check">Done</p></td>
                    </tr>
                </table>

                <Interviewers /> 
            </div>
        );
    }
}

//jenna: give above Interviewers an ID for styling

//interviewers table rows
class Interviewers extends React.Component {
    constructor(props) {
        super(props);
        this.state = cjrvShuJu;
    }

    render() {
        let shortened = this.state.interviewers;

          return (
            <table>
                <th style={{color: '#C5C5C5', paddingBottom: '10px'}}>INTERVIEWERS</th>
                <tr> 
                    <td style={{width:'100%', lineHeight: '35px'}}>{shortened.interviewer1}</td> 
                </tr>
                <tr>  
                    <td style={{width:'100%', lineHeight: '35px'}}>{shortened.interviewer3}</td>
                </tr>
                <tr>  
                    <td style={{width:'100%', lineHeight: '35px'}}>{shortened.interviewer7}</td>
                </tr>
            </table>        
          );
    
    }
}


//side description box
class Description extends React.Component {
    render() {
        return(
            <button id='descriptionButton'>View description of role</button>
        );
    }
}

//page header with position name, number of candidates
class HeaderInfo extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        let handleModalOpen = this.props.handleModalOpen;
        handleModalOpen();
    }

    render() {
        return(
            <table style={{width: '100%', height: "100px", paddingLeft: '10%', paddingRight: '10%'}}>
                <tr style={{width: '100%'}}>
                    <td style={{width: '20%', textAlign: "left", verticalAlign: "bottom"}}><h1 id='positionTitle'>{this.props.title}</h1></td>
                    <td style={{width: '9%', textAlign: "left", verticalAlign: "bottom", paddingBottom: '10px'}}><p id='numCandidates'>{`${this.props.numCandidates} candidates`}</p></td>
                    <td id="emptySpace"> </td>
                    <td ><button id="addCandidateButton" onClick={this.closeModal}>+  add candidate</button></td>
                    <td style={{width: "10px"}}></td>
                    <td><button id="finishChoosingButton">finish choosing</button></td>
                </tr>
            </table>
        );
    }
}


