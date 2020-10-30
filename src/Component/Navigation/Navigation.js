import React from 'react'
import NavData from './NavData/Navdata'
// 
// import Login from './Login/Login'
// import Todo from './Todo/Todo'
import classes from './Navigation.module.css'
function Navigation() {
    return (
        <div className={classes.Navi}>
            <NavData />
        </div>
    )
}
export default Navigation