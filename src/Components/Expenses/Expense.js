import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import "../UI/Card.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expense = (props) => {
  const [filterYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log('expense.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense)=> {
    return expense.date.getFullYear().toString() === filterYear
  });

  {/*Third approach for filter */}
//   let expenseCount = <p>No Expense Found</p>
//  if(filteredExpenses.length >0){
//    expenseCount = filteredExpenses.map((expense)=>(
//     <ExpenseItem
//           key={expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//    ))
//  }  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onfilterChangeHandler={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        {/* {props.items.map((expense) => ( */}

      {/* First Approach*/}
        {/* {filteredExpenses.length ===0 ?<p>No Expenses Found </p>:filteredExpenses.map((expense)=>(
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

        {/*Second Approach */}
          {/* {filteredExpenses.length === 0 &&<p>No Data Found</p>}
          {filteredExpenses.length >0 && filteredExpenses.map((expense)=>(
            <ExpenseItem
            key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

          {/*Third approach calling  */}
          {/* {expenseCount} */}

          <ExpensesList items ={filteredExpenses} />

         {/* {filteredExpenses.map((expense)=>(
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expense;
