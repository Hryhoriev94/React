import { useState, useEffect } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = event => {
      setEnteredName(event.target.value);
  }

  const nameInputBlurHandler = (event) => {
      setEnteredNameTouched(true);
  }

  const formSubmitHandler = event => {
      event.preventDefault();

      setEnteredNameTouched(true);

      if(!enteredNameIsValid) {
          return;
      }
      console.log(enteredName);
      setEnteredName('');
      setEnteredNameTouched(false);
  }

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
