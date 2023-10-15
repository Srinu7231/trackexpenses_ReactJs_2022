import React from 'react';
import { Chart } from './Chart/Chart';


export const ExpenseChart = (props) => {
    let DataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
    ];
    // console.log("Expenses on chart===============>",props.expenses)
    for (const expense of props?.Data) {
        console.log("Month =============================> ", new Date(expense.date).toLocaleString("en-IN", { month: "short" }))
        const expenseMonth = new Date(expense?.date).toLocaleString("en-IN", { month: "short" })
        console.log("Expenses Month :===========>", expenseMonth === 'Jan')
        console.log("Expense Item : ", expense)
        DataPoints = DataPoints.map(dataPoint => {
            if (expenseMonth === dataPoint.label) {
                dataPoint.value += parseInt(expense.amount)
            }
            return { ...dataPoint }
        })
    }

    console.log("Data Points after Update:=====================> ", DataPoints)


    // console.log("Data Points : ===============>", DataPoints)

    return <Chart DataPoints={DataPoints} />
}
