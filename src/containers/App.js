import 'antd/dist/antd.css';
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../components/home'
import About from '../components/about'

export default class App extends Component{
    render(){
        return (
            <Router>  
                <div>
                    <Link to="/">home</Link>
                    <Link to="/about">about</Link>
                    <div className="content">
                        <hr/>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                    </div>
                </div>
            </Router>  
        )
    }
}