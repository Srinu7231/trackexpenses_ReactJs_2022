import React, { useState } from "react";
import '../App.css'
import { ExpenseForm } from "./ExpenseForm";



export const NewExpenses = ({BringUpData,openHandler})=>{
    const [expensesData,setExpenseData] = useState([])

    const getData = (data)=>{
        setExpenseData(data)
        BringUpData(expensesData)
    }
    console.log("on New expenses",expensesData)
    return <ExpenseForm getData={getData} openHandler={openHandler}/>
}