import React,{ useState }from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
const ExpenseItem =(props)=>{
//      const date = new Date(2021, 2, 21);
//      const carTitle = 'BMW';
//    const amount = 295.90;

// const month = props.date.toLocaleString('en-US',{month:'long'})
// const day = props.date.toLocaleString('en-US',{day:'2-digit'});
// const year = props.date.getFullYear();

const [title,setTitle] = useState(props.title)
console.log('ExpenseItem Evaluated by React');

//let title = props.title;

const OnCLicked =()=>{
// console.log('Clicked');
// title  ='updated'
// console.log(title);
setTitle('Updated');
console.log(title);

};
    return(
     <li>
    <Card className = "expense-item">
        {/* <div>{props.date.toISOString()}</div> */}
        {/* <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div> */}
        <ExpenseDate  date={props.date} />
       <div className = "expense-item__description">
           <h2>{title}</h2>
   <div className ="expense-item__price">${props.amount}</div>
   {/* <button onClick ={() =>{console.log('clicked');}}>Click</button> */}
   <button onClick={OnCLicked}>Click</button>
       </div>
       </Card>
       </li>
    
    
    )
}
export default ExpenseItem