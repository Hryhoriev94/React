import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import React, {useRef} from "react";
import MD5 from "crypto-js/md5";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const errorHandler = () => {
        const errorModal = {};
        if(nameInputRef.current.value.trim().length === 0 && ageInputRef.current.value.trim().length === 0) {
            errorModal.title = 'The user does not have a name and age';
            errorModal.message = 'Please enter username and age';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(nameInputRef.current.value.trim().length === 0) {
            errorModal.title = 'Name is not be empty';
            errorModal.message = 'Please, complete name of the user';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(ageInputRef.current.value.trim().length === 0) {
            errorModal.title = 'Age is not be empty';
            errorModal.message = 'Please, complete age of the user';
            props.onErrorSubmit(errorModal);
            return;
        }
        if(ageInputRef.current.value.trim().length === 0) {
            errorModal.title = 'Age can not be smaller than 1';
            errorModal.message = 'Please enter a valid age';
            props.onErrorSubmit(errorModal);
            return;
        }
    }


    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(nameInputRef.current.value);
        if((nameInputRef.current.value.trim().length === 0 ||
            ageInputRef.current.value.trim().length === 0) ||
            +ageInputRef.current.value < 1)
        {
            errorHandler();
            return;
        }
        const id = MD5(nameInputRef.current.value +
            ageInputRef.current.value + getRandomInt(2, 8) ** getRandomInt(2, 16) / getRandomInt(2, 65535) +
            Date.now()).toString();

        props.onSaveUser({
            name: nameInputRef.current.value,
            age: ageInputRef.current.value,
            id: id
        });
        nameInputRef.current.value = null;
        ageInputRef.current.value = null;
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    ref={nameInputRef}
                />

                <label htmlFor="age">Age (Years)</label>
                <input
                    type="age"
                    id="userAge"
                    ref={ageInputRef}
                />

                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    )

}

export default AddUser;