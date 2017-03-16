import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUserPage } from '../actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import User from '../components/user'

class About extends Component{
    render(){
        return (
            <Router>
            <div>about
                <Link to="/about/user">user</Link>
                <hr/>
                <Route path="/about/user" component={User}></Route>
            </div>
            </Router>
        )
    }
}



export default About;