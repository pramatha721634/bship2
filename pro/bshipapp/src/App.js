import React, { Component } from 'react'
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componets/Navbar';
import Footer from './componets/Footer';
//React router import
import {Switch,Route} from 'react-router-dom';
//import pages
import Home from './componets/pages/Home';
import Brandbship from './componets/pages/Brandbship';
import Whyjoin from './componets/pages/Whyjoin';
import ECTeam from './componets/pages/ECTeam';
import Contact from './componets/pages/Contact';
import Members from './componets/pages/Members';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
       <Switch>
         <Route exact path="/"component={Home}/>
         <Route path="/members"component={Members}/>
         <Route path="/ecteam"component={ECTeam}/>
         <Route path="/whyjoin"component={Whyjoin}/>
         <Route path="/Brandbship"component={Brandbship}/>
         <Route path="/contact"component={Contact}/>
       </Switch>
        <Footer/>
      </div>
    )
  }
}

