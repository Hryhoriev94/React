import React, {useState} from "react";
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState(props.title);
    // const [enteredAmount, setEnteredAmount] = useState(props.amount);
    // const [enteredDate, setEnteredDate] = useState(props.amount);
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const changeTitleHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            }
        })
        // setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value,
            }
        })
        // setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value,
            }

        })
        // setEnteredDate(event.target.value)
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setUserInput({enteredTitle: '', enteredAmount: '', enteredDate: ''})
    }



    const cancelHandler = () => {
        props.onChangeStateForm()
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={changeTitleHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type="number" min='0.01' step='0.01' value={userInput.enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type="date" min='2010-01-01' max='2023-12-31' value={userInput.enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className={'new-expense__actions'}>
                <button type={'button'} onClick={cancelHandler}>Cancel</button>
                <button type={'submit'}>Add Expense</button>
            </div>
        </form>
        )

}

export default NewExpenseForm;