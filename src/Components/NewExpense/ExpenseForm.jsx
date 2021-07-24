import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState(0);
  const [enterDate, setEnterDate] = useState(0);

  //second way of having useState
  //   const [userInput, setUserInput] = useState({
  //     enterTitle: "",
  //     enterAmount: "",
  //     enterDate: "",
  //   });

  const titleChangeHandler = (event) => {
    // console.log(event);
    setEnterTitle(event.target.value);
    // setUserInput(event.target.value); -- wrong
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enterTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
    // setUserInput(event.target.value); -- worng
    // setUserInput({
    //   enterAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enterAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput(event.target.value); -- wrong
    // setUserInput({
    //   enterDate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expensedata = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    // console.log(expensedata);
    props.onSaveExpenseData(expensedata);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2021-07-22"
            max="2022-07-22"
            value={enterDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type = "button" onClick ={props.onCancel}> Cancel</button>
          <button type="submit">Add Expense </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
