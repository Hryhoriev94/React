import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, {useState} from "react";


const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title)

    const onDeleteItemHandler = () => {
        props.onDeleteItemHandler(props);
    }

    return (
        <li>
            <Card className={'expense-item'}>
                <ExpenseDate date={props.date}/>
                <div className={'expense-item__description'}>
                    <h2>{title}</h2>
                    <div className={'expense-item__price'}>${props.amount}</div>
                </div>
                <div className={'expense-item__delete'}>
                    <button onClick={onDeleteItemHandler}>Delete</button>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;