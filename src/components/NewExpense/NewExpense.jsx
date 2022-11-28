import React, {useState} from "react";
import './NewExpense.css'
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const changeStateFormHandler = () => {
        setShowElement(<button onClick={showNewExpenseHandler}>Add New Expense</button>)
    }

    const showNewExpenseHandler = () => {
        setShowElement(<NewExpenseForm onChangeStateForm={changeStateFormHandler} onSaveExpenseData={saveExpenseDataHandler} />)
    }

    const [showElement, setShowElement] = useState(<button onClick={showNewExpenseHandler}>Add New Expense</button>)

    return (
        <div className={'new-expense'}>
            {showElement}
        </div>
    )
}

export default NewExpense;