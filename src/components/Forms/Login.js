// import React, {Component} from 'react'
// import fire from '../../config/Fire';
// import './Login.css';
// class Login extends Component{
//     State ={
//         email:"",
//         password:"",
//         fireMessage:""

//     }
//     handleChange =e=>{
//         this.setState({[e.target.name]:e.target.value})
//     }
//     // login = e =>{
//     //     e.preventDefault()
//     //     fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
//     //     .catch((error)=>{
//     //         this.setState({fireMessage: error.message})
//     //     })
//     // }
//     login = e =>{
//         e.preventDefault()
//     fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((user)=>{
//     var currentUser = fire.auth().currentUser;
//     currentUser.updateProfile({
//         displayName: this.state.displayName
  
//     })
//     }).catch((error)=>{
//         this.setState({fireMessage: error.message});
// }) ;

//     }
//     render(){
//         let errorNotification= this.state.fireMessage ?(<div className='Error'>{this.state.fireMessage}</div>): null;
//         return(<>
//         {errorNotification}
//         <form>
//             <input type="text" className='regField' placeholder='email' name="email" 
//             value={this.state.email} 
//             onChange={this.handleChange}/>
//             <input type="password" className='regField' placeholder='password' name="password "
//              value={this.state.password}
//              onChange={this.handleChange}/>
//             <input type="submit" onClick={this.login}className='submitBtn' value="LOGIN"/>
//         </form>
//         </>
//         )
//     }
// }
// export default Login



import React, {Component} from 'react'
import fire from '../../config/Fire';

import './Login.css';
class Login extends Component{
    state ={
        email: "",
        password: "",

        fireMessage: ""

    }
    handleChange = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = e =>{
        e.preventDefault()
    fire.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((user)=>{
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
       
            <input type="text" className='regField' placeholder='email' name="email"
            onChange={this.handleChange}
            value={this.state.email}/>
            <input type="password" className='regField' placeholder='password' name="password"
            onChange={this.handleChange}
            value={this.state.password}/>
            <input onClick={this.login}type="submit" className='submitBtn' value="LOGIN"/>
        </form>
        </>
        )
    }
}
export default Login