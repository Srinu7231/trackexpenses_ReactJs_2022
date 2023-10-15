import './App.css';
import { Card } from './Components/Card';
import ExpenseItem from './Components/ExpenseItem';
import { expenseData } from './data/expencesdata';
import { NewExpenses } from './Components/NewExpense';
import { useState } from 'react';
import { ExpensesFilter } from './Components/ExpensesFilter';
import { ExpenseChart } from './Components/ExpensesChart';
function App() {
  const [expensesData, BringUpData] = useState([])
  const [is_open, setIsOpen] = useState(false)

  const [yr_selected, setyr_selected] = useState("2020")

  // console.log("================================================================================================")
  // console.log("on APP.js",expensesData)
  // console.log("on APP.js yr selected :",yr_selected)

  const filtered_List = expensesData.filter((expense) =>
    yr_selected === new Date(expense.date).toLocaleString('en-IN', { year: 'numeric' }))
  // console.log("filtered List:",filtered_List)
  // const openHandler = ()=>{
  //   setIsOpen(!is_open)
  // }

  return (
    <>
      {/* {!is_open?<Card className="initial-card">
                <button onClick={openHandler}>Add Expense</button>
    </Card>:
    <> */}
      <Card className='form'>
        <NewExpenses yr_selected={yr_selected} BringUpData={BringUpData} /> {/*openHandler={openHandler}*/}
      </Card>
      <ExpensesFilter setyr_selected={setyr_selected} />
      <ExpenseChart Data={filtered_List} />
      {/* </>} */}
      <Card className='app-card'>
        {filtered_List.length === 0 ? <div className='not-found'><h4>No Element Found</h4></div>
          : filtered_List?.map(data => {
            return <ExpenseItem
              key={data.id}
              title={data.title}
              amount={data.amount}
              date={data.date}
            />
          })}
      </Card>
    </>
  );
}

export default App;
