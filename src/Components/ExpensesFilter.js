import React from 'react';
import { Card } from './Card';
import './filter.css'

export const ExpensesFilter = ({setyr_selected,yr_selected}) => {
    const onChangeHandler = (event) => {
        setyr_selected(event.target.value)
    }
    console.log("yr_selected on exp filter:",yr_selected)
    return <Card className="filter-card">
             <div className='filter-select'>
                <div className='label'>Filter by year</div>
                <select value={yr_selected} onChange={onChangeHandler} className='select-yr'>
                    <option  value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
             </div>
        </Card>
}