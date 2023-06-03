import React,{ useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [entertitle,setentertitle]=useState('')
    const [enteramount,setenteramount]=useState('')
   const [enterdate,setenterdate]=useState('')
   /*const [userinput,setuserinput]=useState({
     entertitle:'',
     enteramount:'',
     enterdate:''
   })*/
    const titlechangehandler=(event)=>{
        /*setuserinput({
            ...userinput,
            entertitle: event.target.value,
        })
        /*setuserinput((prevState)=>{
            return {...prevState,entertitle: event.target.value,}

        })*/
        setentertitle(event.target.value)
    
    }
    const amountchangehandler=(event)=>{
        setenteramount(event.target.value)
    }
    const datechangehandler=(event)=>{
         setenterdate(event.target.value)
    }
    const submithandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:entertitle,
            amount:enteramount,
            date:new Date(enterdate)
        }
        console.log(expenseData)

    }

    return(
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                <label>Title</label>
        <input type="text" onChange={titlechangehandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Amount</label>
        <input type="number" onChange={amountchangehandler}></input>
                </div>
                <div className="new-expense__control">
                <label>Date</label>
        <input type="date"onChange={datechangehandler}></input>
                </div>
                
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div> 
            
        </form>
    )

}
export default ExpenseForm;