import React, {Component} from 'react'
import fire from '../../config/Fire';

import './Login.css';
class Register extends Component{
    state ={
        email: "",
        password: "",
        displayName: "",
        fireMessage: ""

    }
    handleChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    register = e =>{
        e.preventDefault()
    fire.auth().createUserWithEmailAndPassword(this.state.email , this.state.password).then((user)=>{
    var currentUser = fire.auth().currentUser;
    currentUser.updateProfile({
        displayName: this.state.displayName
  
    })
    }).catch((error)=>{
        this.setState({fireMessage: error.message});
}) ;

    }
    render(){
        let errorNotification= this.state.fireMessage ?(<div className='Error'>{this.state.fireMessage}</div>): null;
        return(<>
        {errorNotification}
        <form>
        <input type="text" className='regField' placeholder='your name' name="displayName" 
        onChange={this.handleChange}
        value={this.state.displayName}/>
            <input type="text" className='regField' placeholder='email' name="email"
            onChange={this.handleChange}
            value={this.state.email}/>
            <input type="password" className='regField' placeholder='password' name="password"
            onChange={this.handleChange}
            value={this.state.password}/>
            <input onClick={this.register}type="submit" className='submitBtn' value="SIGNUP"/>
        </form>
        </>
        )
    }
}
export default Register