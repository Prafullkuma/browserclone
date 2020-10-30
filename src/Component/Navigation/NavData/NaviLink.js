import React from 'react'
import classes from '../NavData/Navilink.module.css'
function NaviLink(props) {
    return (
        <div className={classes.Link}>
            <li>
                <a href={props.link} alt="Login">{props.children}</a>
            </li>
        </div>
    )
}

export default NaviLink
