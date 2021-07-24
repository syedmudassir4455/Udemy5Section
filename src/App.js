import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "car Insurence",
    amount: 233.98,
    date: new Date(2021, 2, 21),
  },
  {
    id: "e2",
    title: "Bike Insurence",
    amount: 445.87,
    date: new Date(2021, 2, 21),
  },
  {
    id: "e3",
    title: "Health Insurence",
    amount: 325.87,
    date: new Date(2021, 4, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );

  //   return React.createElement(
  //     "div",
  //     {},
  //     React.createElement("h2", {}, "Lets get started"),
  //     React.createElement(Expense, { items: expense })
  //   );
};
export default App;
