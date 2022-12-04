import React from "react";
import classes from './UserList.module.css'
import Card from "../UI/Card";

const UserList = props => {
    const elementClasses = props.className ? props.className : '';
    return (
        <Card className={`${classes.users} ${elementClasses}`}>
            <ul>
                {
                    props.users.map(user => <li key={user.id}>{user.name} ({user.age} years old)</li>)
                }
            </ul>
        </Card>
    )
}

export default UserList;