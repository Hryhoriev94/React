import './Expenses.css';
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

    const Expenses = (props) => {

    const deleteItemHandler = (element) => {
        props.onDeleteItemHandler(element);
    }

    let startFilteredYear = '2022';
    if(window.localStorage.getItem('filtredYear')) startFilteredYear = window.localStorage.getItem('filtredYear');


    const [filteredYear, setFilteredYear] = useState(startFilteredYear)
    const filteredChangedHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filtredExpanses = props.items.filter(expense => {
              return expense.date.getFullYear().toString() === filteredYear})

    let expenses = <h2 className={'expenses-null'}>Not expenses in this year</h2>

    if(filtredExpanses.length > 0) expenses = <ExpensesList
        items={filtredExpanses}
        filteredYear={filteredYear}
        onDeleteItemHandler={deleteItemHandler}
    />

    return (
        <Card className={'expenses'}>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filteredChangedHandler}/>
            <ExpensesChart expenses={filtredExpanses}/>
            {expenses}
        </Card>
    )
}

export default Expenses;
