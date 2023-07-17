
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
// this is the file which is running so all components are linked in this only
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

export default class App extends Component {
  state={ // this is like classes in oops
    progress:10
  }
  setprogress=(progress)=>{ //function
    this.setState({progress: progress})
  }
  render() { // this is class based component
   
    return (
      <div>
        <Router> 
       <Navbar/>
       <LoadingBar
        color='yellow'
       
        progress={this.state.progress}
        
      />
       {/* it is used to get the navbar data and     */}
       <Routes>
            <Route exact path="/" element={<News setprogress={this.setprogress} key="general" pageSize={9} country="in" category="general"/>} /> {/*  category is sent as a prob*/}
            <Route exact path="/business"element= {<News setprogress={this.setprogress} key="business" pageSize={9} country="in" category="business" />}/>
            <Route exact path="/entertainment"element = {<News setprogress={this.setprogress} key="entertainment" pageSize={9} country="in" category="entertainment" />}/>
            <Route exact path="/general"element= {<News setprogress={this.setprogress} key="general" pageSize={9} country="in" category="general"/>}/>
            <Route exact path="/health"element={<News setprogress={this.setprogress} key="health" pageSize={9} country="in" category="health" />}/>
            <Route exact path="/science"element={<News setprogress={this.setprogress} key="science" pageSize={9} country="in" category="science" />}/>
            <Route exact path="/sports"element={<News setprogress={this.setprogress} key="sports" pageSize={9} country="in" category="sports"/>}/>
            <Route exact path="/technology"element={<News setprogress={this.setprogress} key="technology" pageSize={9} country="in" category="technology"/>}/>
       </Routes>
       </Router>
      </div>
    )
  }
}



