import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {Home} from './components/Home';
import {Interviews} from './components/Interviews';
import {IndivPosition} from './components/IndivPosition';
import {PositionDashboard} from './components/PositionDashboard';
import {Start} from './components/Start';
import {Company} from './components/Company';
import {Join} from './components/Join';
import {Create} from './components/Create';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/positions" component={PositionDashboard}/>
        {/*uhohpuff*/}
        <Route path="/individualposition" component={IndivPosition}/>
        <Route path="/interviews" component={Interviews}/>
        <Route path="/start" component={Start}/>
        <Route path="/company" component={Company}/>
        <Route path="/join" component={Join}/>
        <Route path="/create" component={Create}/>
      </Switch>
    </div>
  );
}

export default App;
