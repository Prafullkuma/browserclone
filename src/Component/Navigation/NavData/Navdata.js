import React, { useState } from 'react'
import classes from './NavData.module.css'
import NaviLinks from './NaviLink'

const NavData = () => {
    const [cityName, setCityName] = useState('')
    const newNameHandler = (event) => {
        setCityName({
            cityName: event.target.value
        })
    }
    console.log(cityName)
    return (
        <div className={classes.Login}>
            <input
                onChange={(event) => newNameHandler(event)} />
            <div className={classes.fields}>
                <NaviLinks link="/register"> Register</NaviLinks>
                <NaviLinks link="/Login"> Login </NaviLinks>
                <NaviLinks link='/todo'>TodoList</NaviLinks>

            </div>
        </div>
    )
}
export default NavData