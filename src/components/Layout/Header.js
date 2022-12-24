import { Fragment } from "react";
import mealsImg from '../../assets/img/meals.jpg'
import classes from "./Header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='' />
            </div>
        </Fragment>

    )
}

export default Header