import { useState } from "react"
import "../App.css"
import { Card } from "./Card"
const ExpenseItem = ({ key, title, date, amount }) => {
   //  const [newtitle,setTitle] = useState(title)
   //  console.log("How many times This component is called ??")

   //  const onClickHandler = ()=>{
   //      console.log("Title Got updated for ",title)
   //      setTitle("Updated !!")
   //  } 

   // const month = new Date().toLocaleString('en-IN',{month:'long'})
   // const day = new Date().toLocaleString('en-IN',{day:'2-digit'})
   // const year = new Date().getFullYear()
   const month = new Date(date).toLocaleString('en-IN', { month: 'long' })
   const day = new Date(date).toLocaleString('en-IN', { day: '2-digit' })
   const year = new Date(date).toLocaleString('en-IN', { year: 'numeric' })
   // const title1 = "Car Insurance"
   // const amount1 = "₹ 5000.50"
   return <Card className="item">
      <div className="date">
         <div className="place-center">{month}</div>
         <div className="place-center">{day}</div>
         <div className="place-center">{year}</div>
      </div>
      <div className="box">
         <h2 className="title">{title}</h2>
         <div className="amount">₹ {amount}</div>
      </div>
      {/* <button onClick={onClickHandler}>Change title</button> */}
   </Card>
}

export default ExpenseItem;