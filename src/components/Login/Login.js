import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import Input from "../UI/Input/Input";
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../store/auth-context";


const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') }
  }

  if(action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@')}
  }

  return { value: '', isValid: false}

}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT') {
    // console.log("USER_INPUT " + action.val.trim().length >= 6)
    return {value: action.val, isValid: action.val.trim().length >= 6}
  }

  if(action.type === 'INPUT_BLUR') {
    // console.log('INPUT_BLUR ' + state.value.trim().length >= 6)
    return { value: state.value, isValid: state.value.trim().length >= 6}
  }

  return {value: '', isValid: false}
}

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const authContext = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const {isValid: emailIsValid} = emailState;
  const {isValid: passwordIsValid} = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(
          emailState.isValid && passwordState.isValid
      );
    }, 100);


    return () => {
      clearTimeout(identifier)
    }

  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);

    dispatchEmail({type: 'USER_INPUT', val: event.target.value})
    setFormIsValid(
        emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);

    dispatchPassword({type: 'USER_INPUT', val: event.target.value});
    setFormIsValid(
        emailState.isValid && passwordState.isValid
    );

  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
    // setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid) {
      authContext.onLogin(emailState.value, passwordState.value);
    } else if(!emailIsValid) {
      emailInputRef.current.focus()
    } else {
      passwordInputRef.current.focus()
    }

  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
            ref={emailInputRef}
            id={'email'}
            type={'email'}
            label={'Email'}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            isValid={emailIsValid}
            value={emailState.value}
        />
        <Input
            ref={passwordInputRef}
            id={'password'}
            type={'password'}
            label={'Password'}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            isValid={passwordIsValid}
            value={passwordState.value}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
