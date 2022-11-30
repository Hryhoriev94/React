import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import React, {useState} from "react";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if((enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) || +enteredAge < 1) return;
        console.log(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={enteredUsername} onChange={usernameChangeHandler}/>

                <label htmlFor="age">Age (Years)</label>
                <input type="age" id="userAge" value={enteredAge} onChange={ageChangeHandler}/>

                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;