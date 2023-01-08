import { useState, useEffect } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.');

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
      if(enteredNameIsValid && enteredEmailIsValid) {
          setFormIsValid(true);
      } else {
          setFormIsValid(false);
      }
  }, [enteredNameIsValid, enteredEmailIsValid])

  const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
  }

  const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
      setEnteredNameTouched(true);
  }

  const emailInputBlurHandler = event => {
      setEnteredEmailTouched(true);
  }

  const formSubmitHandler = event => {
      event.preventDefault();

      setEnteredNameTouched(true);

      if(!enteredNameIsValid || !enteredEmailIsValid) {
          return;
      }
      console.log(enteredName);
      setEnteredName('');
      setEnteredEmail('')
      setEnteredNameTouched(false);
      setEnteredEmailTouched(false);
  }

  const inputNameClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';
  const inputEmailClasses = emailInputIsValid ? 'form-control invalid' : 'form-control';
  let emailErrorMessage = '';

  if(enteredEmail.trim() !== '') {
      emailErrorMessage += 'Email must not be empty. ';
  }
  if(!enteredEmail.includes('@')) {
      emailErrorMessage += 'Email must included "@" symbol. '
  }
  if(!enteredEmail.includes('.')) {
      emailErrorMessage += 'Email must included "." symbol. '
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
          {nameInputIsValid && <p className={'error-text'}>Name must not be empty</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input value={enteredEmail} type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {emailInputIsValid && <p className={'error-text'}>{emailErrorMessage}</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
