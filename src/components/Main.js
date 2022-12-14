import React, { Component } from 'react'
import fire from '../config/Fire';
import Login from './Forms/Login';
import Register from './Forms/Register';
import './Main.css';
import Tracker from './Tracker/Tracker';
import Spinner from '../assets/loader.gif'
class Main extends Component{
    state ={
        user:1,
        loading:true,
        formSwitcher:false
    }
    formSwitcher = (action)=>{
console.log(action)
this.setState({
    formSwitcher: action=== "register" ? true:false
})
    }
    componentDidMount(){
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            }else{
                this.setState({user:null})
            }
        });
    }
     
    render(){
        const form = !this.state.formSwitcher ?<Login/>:<Register/>
        if(this.state.user ===1){
            return(
                <div className='mainBlock'>
                    <div className='Spinner'>
                        <img src={Spinner} alt="Spinner" className='ImgSpinner'/>
                    </div>
                </div>
            )
        }
        return(
        <>
       {!this.state.user ?
        (<div className='mainBlock'>

       {form}
      {!this.state.formSwitcher?(
        <span className='underLine'>
            Not Registered? 
            <button onClick={()=> this.formSwitcher(!this.state.formSwitcher ? 'register' :'login')}
            className='linkBtn'>Create an account</button>
        </span>):
        (
            <span className='underLine'>
            Have account Login? 
            <button onClick={()=> this.formSwitcher(!this.state.formSwitcher ? 'register' :'login')}
            className='linkBtn'>Login</button>
        </span> 
        )
    }
        </div>):(<Tracker/>)
    }
        </>
        )
    }
}
export default Main