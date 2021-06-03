import React, { useState, useEffect } from 'react'
import * as classes from './MobileNav.module.scss';

import { IoMdDownload } from 'react-icons/io'

const MobileNav = (props) => {


    return (
        <>
            <div className={`${classes.MobileNavContainer} ${props.show ? classes.show : classes.hide}`}>
                    <ul className={classes.mobileNavMenu}>
                        <li className={classes.mobileNavItem}><a href="/#About">About</a></li>
                        <li className={classes.mobileNavItem}><a href="/#Projects">Projects</a></li>
                        <li className={classes.mobileNavItem}><a href="/#Contact">Contact</a></li>
                        <li className={classes.mobileNavItem}>
                        <button className={classes.resumeButton}>
                        <span>Resume</span> <IoMdDownload className={classes.downloadIcon} size="1rem" />
                    </button>
                        </li>
                    </ul>
                    <div className={classes.bottomBorders}>
</div>
            </div>
        </>
    )
}

export default MobileNav;