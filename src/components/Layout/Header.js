import { Fragment } from "react";
import mealsImg from '../../assets/img/meals.jpg'
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImg} alt='' />
            </div>
        </Fragment>

    )
}

export default Header