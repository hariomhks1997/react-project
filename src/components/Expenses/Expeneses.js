import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
const Expeneses = (props) => {
  const [filteryear, setfilteryear] = useState('2021');
  const filterchangehandler = (selectedyear) => {
    setfilteryear(selectedyear);
  };
  const filterExpenses=props.item.filter(expense=>{
    return expense.date.getFullYear().toString()==filteryear;
  })
  
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteryear}
        onchangefilter={filterchangehandler}
      ></ExpensesFilter>
    <ExpensesList items={filterExpenses}></ExpensesList>

    </Card>
  
  )
};
export default Expeneses;
