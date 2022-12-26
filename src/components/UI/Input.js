import classes from './Input.module.css'

const Input = props => {
    const type = props.type || 'text';
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input type={type} id={props.input.id} {...props.input} />
            </div>

        );

}

export default Input;