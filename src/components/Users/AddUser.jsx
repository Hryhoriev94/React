import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import React, {useState} from "react";
import MD5 from "crypto-js/md5";

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const errorHandler = () => {
        const errorModal = {};
        if(enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
            errorModal.title = 'The user does not have a name and age';
            errorModal.message = 'Please enter username and age';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(enteredUsername.trim().length === 0) {
            errorModal.title = 'Name is not be empty';
            errorModal.message = 'Please, complete name of the user';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(enteredAge.trim().length === 0) {
            errorModal.title = 'Age is not be empty';
            errorModal.message = 'Please, complete age of the user';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(enteredAge.trim().length === 0) {
            errorModal.title = 'Age can not be smaller than 1';
            errorModal.message = 'Please enter a valid age';
            props.onErrorSubmit(errorModal);
            return;
        }
    }


    const addUserHandler = (event) => {
        event.preventDefault();
        if((enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) || +enteredAge < 1)
        {
            errorHandler();
            return;
        }
        const id = MD5((Math.floor(Math.random() * 2**64) / Math.floor(Math.random() * 2**16)) * Math.floor(Math.random() * 2**8)).toString()
        props.onSaveUser({
            name: enteredUsername,
            age: enteredAge,
            id: id
        });
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