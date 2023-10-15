import React, { useState } from "react";


export const ExpenseForm = ({ getData, openHandler }) => {
    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const [expensesList, setList] = useState([])
    const onChangeHandler = (event) => {
        // const value = event.target.value
        console.log("Event =======>", event)
        setExpense((prevValues) => {
            return { ...prevValues, [event.target.name]: event.target.value, id: `e${expensesList.length}` }
        })
        console.log(expense)
    }
    const onSubmitHandler = (event) => {
        console.log(expense)
        setList((prevValues) => [expense, ...prevValues])
        console.log("Expenses List:", expensesList)
        setExpense({
            title: '',
            amount: '',
            date: ''
        })
        event.preventDefault()
    }
    getData(expensesList)
    return <form onSubmit={onSubmitHandler} className="root-box">
        <div className="input-box">
            <label className="label">Title</label>
            <input onChange={onChangeHandler} value={expense.title} name="title" className="input-field" type='text' />
        </div>
        <div className="input-box">
            <label className="label">Amount</label>
            <input onChange={onChangeHandler} value={expense.amount} name="amount" className="input-field" type='number' min='0.01' step='0.01' />
        </div>
        <div className="input-box">
            <label className="label">Date</label>
            <input onChange={onChangeHandler} value={expense.date} name="date" className="input-field" type='date' min='2020-01-01' max='2050-12-31' />
        </div>
        <div className="btn-box">
            <div onClick={openHandler} className="submit-button">
                <h4 className="button">Cancel</h4>
            </div>
            <div onClick={onSubmitHandler} className="submit-button">
                <h4 className="button">Submit</h4>
            </div>
        </div>
    </form>
}