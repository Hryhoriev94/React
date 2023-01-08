import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

  const {
      value: enteredName,
      isValid: enteredNameIsValid,
      hasError: nameInputHasError,
      valueChangeHandler: nameChangedHandler,
      valueBlurHandler: nameBlurHandler,
      reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if(enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
  }

  const formSubmitHandler = event => {
      event.preventDefault();

      if(!enteredNameIsValid || !enteredEmailIsValid) {
          return;
      }
      console.log(enteredName);
      resetNameInput();
      resetEmailInput();
  }

  const inputNameClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const inputEmailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={inputNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredName} type='text' id='name' onChange={nameChangedHandler} onBlur={nameBlurHandler} />
          {nameInputHasError && <p className={'error-text'}>Name must not be empty</p>}
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input value={enteredEmail} type='email' id='email' onChange={emailChangedHandler} onBlur={emailBlurHandler} />
        {emailInputHasError && <p className={'error-text'}>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
