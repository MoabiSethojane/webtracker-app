import React ,{Component} from 'react'
import fire, { firestore } from '../../config/Fire';
import './Tracker.css'
import Transaction from './Transaction/Transaction';
class Tracker extends Component{

    state = {
        transactions:[],
        money:0,
        transactionName:"",
        transactionType:"",
        price:' ',
        currentUID: fire.auth().currentUser.uid
    }
   
    logout =()=>{
        fire.auth().signOut();
    }
    handleChange = input => e=>{
        this.setState({
            [input]: e.target.value !=="0"? e.target.value:""
        });
    }
    addNewTransaction=()=>{
        const {
      
            money,
            transactionName,
            transactionType,
            price,
            currentUID
            
        }= this.state;
      
        if(transactionName && transactionType && price){
            const BackUpState = this.state.transactions;
            BackUpState.push({
                id: BackUpState.length + 1 ,
                name:transactionName,
                type: transactionType,
                price:price,
                user_id: currentUID
            });
            console.log(BackUpState)
            fire.firestore().collection("trasactions").doc(currentUID).set({
            id: BackUpState.length  ,
            name:transactionName,
            type: transactionType,
            price:price,
            user_id: currentUID
           }).then((data)=>{
                console.log("success callback")
               
                this.setState({
                    transactions: BackUpState,
                    money: this.state.transactionType === 'deposit'? money + parseFloat(price): money - parseFloat(price),
                    transactionName:'',
                    transactionType: " ",
                    price:""
                })
                console.log(money, "this is the money")
            }).catch((error)=>{
                console.log("error", error)
                console.log(this.state.transactionType, "the trasaction")
            })
            .then(() => {console.log("object is uploaded")}).catch((error) => {});
            // fire.database().ref('Transections /' + currentUID).push({
            //     id: BackUpState.length + 1 ,
            //     name:transactionName,
            //     type: transactionType,
            //     price:price,
            //     user_id: currentUID 
            // }).catch((data)=>{
            //     console.log("success callback")
            //     this.setState({
            //         transactions: BackUpState,
            //         money: transactionType=== 'deposit'? money + parseFloat(price): money - parseFloat(price),
            //         transactionName:'',
            //         transactionType: " ",
            //         price:""
            //     })
            // }).then((error)=>{
            //     console.log("error", error)
            // })
        }
    }
    componentWillMount(){
        const{currentUID,money}=this.state;
        let totalMoney = money;
        const backUpState =  this.state.transactions
        fire.firestore().collection("trasactions").doc(currentUID).set({
            id: backUpState.length  ,
            money: totalMoney,
            user_id: currentUID
           })
           ((snapshot)=>{
            console.log(snapshot)
           })
        
    }
    render(){
        var currentUser = fire.auth().currentUser
      
        return(
           <div className='trackerBlock'>
            <div className='Welcome'>
                <span>Hi, {currentUser.displayName}!</span>
                <button className='exit' onClick={this.logout}>Logout</button>
            </div>
            <div className='totalMoney'>R{this.state.money}</div>
            <div className='newTransactionBlock'>
                <div className='newTransaction'>
                    <form>
                        <input type="text" placeholder='transection name' name="transactionName" 
                        value={this.state.transactionName}
                        onChange={this.handleChange("transactionName")}/>
                        <div className='inputGroup'>
                            <select name='type' value={this.state.transactionType}
                        onChange={this.handleChange('transactionType')}>
                            <option value ='expense'>Expense</option>
                            <option value ='deposit'>Deposit</option>
                            </select>
                            <input type="text"placeholder='Price'name="price"
                            value={this.state.price}
                            onChange={this.handleChange('price')}
                            />
                        </div>
                        
                    </form>
                    <button className='addTransaction' onClick={()=> this.addNewTransaction()}>+ Add Transaction</button>
                </div>
            </div>
            <div className='latestTransaction'> 
            <p>Latest Transaction</p>
            <ul>
                {
                    Object.keys(this.state.transactions).map((id)=>(
                        <Transaction
                        type={this.state.transactions[id].type}
                        name={this.state.transactions[id].name}
                        price={this.state.transactions[id].price}
                        />
                    ))
                }
            </ul>
            </div>
           </div>
        )
    }
}
export default Tracker;