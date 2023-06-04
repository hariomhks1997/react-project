import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
const Expeneses = (props) => {
  const [filteryear, setfilteryear] = useState("2020");
  const filterchangehandler = (selectedyear) => {
    setfilteryear(selectedyear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteryear}
        onchangefilter={filterchangehandler}
      ></ExpensesFilter>
      {props.item.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        ></ExpenseItem>
      ))}
    </Card>
  );
};
export default Expeneses;
