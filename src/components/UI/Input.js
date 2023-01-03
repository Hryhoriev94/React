import React from "react";
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
        const type = props.type || 'text';
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input ref={ref} type={type} id={props.input.id} {...props.input} />
            </div>

        );
})

export default Input;