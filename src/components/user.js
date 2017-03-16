import React, {Component} from 'react';
import { connect } from 'react-redux';
import { loadUserPage } from '../actions'
class User extends Component{

    componentDidMount(){
    }

    loadUserData(){
        this.props.loadUserPage(1);
    }

    render(){
        let avaUrl = this.props.login.avatar_url;
        
        return (
            <div className="user">
                <button onClick={this.loadUserData.bind(this)}> click</button>
                <div className="content">
                    <span>什么都没有</span>
                    <span></span>
                    <span>loading...</span>
                </div>
            </div>
        )
    }
}

export default connect(state => ({...state}), {loadUserPage})(User)