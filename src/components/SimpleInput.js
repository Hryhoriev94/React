import { useState, useEffect } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
      if(enteredNameIsValid) {

      }
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
      setEnteredName(event.target.value);
      setEnteredNameTouched(true);
      if(enteredName.trim() === '') {
          setEnteredNameIsValid(false);
          return;
      }
  }

  const formSubmitHandler = event => {
      event.preventDefault();

      setEnteredNameTouched(true);

      if(enteredName.trim() === '') {
          setEnteredNameIsValid(false);
          return;
      }
      setEnteredNameIsValid(true);
      console.log(enteredName);
      setEnteredName('');

  }

  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const inputClasses = nameInputIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
          {nameInputIsValid && <p className={'error-text'}>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
