import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
import React from "react";

const ExpensesList = props => {

    const deleteItemHandler = (element) => {
        props.onDeleteItemHandler(element);
    }

    let expenses = props.items.map(expense => <ExpenseItem
        key={expense.id}
        id={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        onDeleteItemHandler={deleteItemHandler}
    />);



    return (
        <ul className={'expenses-list'}>{expenses}</ul>
    )
}

export default ExpensesList;