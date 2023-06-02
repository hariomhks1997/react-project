import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import Card from '../UI/Card';




const ExpenseItem= (props) => {
  const changehandler=()=>{
    console.log("click")
  }
  const deletehandler=()=>{
    console.log("delete")
  }
  
    
    return (
      
<Card className='expense-item'>
  <ExpenseDate
    date={props.date}
  ></ExpenseDate>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        <ExpenseDetails
        amount={props.amount}
        title={props.title}
        location={props.location}
        ></ExpenseDetails>
        <button onClick={changehandler}>Change Title</button>
        <button onClick={deletehandler}>Delete Expense</button>
        
      </div>
    </Card>
    
    
    )
    
}
export default ExpenseItem;
