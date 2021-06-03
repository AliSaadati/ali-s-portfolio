import React, { useState, useEffect, useCallback } from 'react';
import * as classes from './Toolbar.module.scss';

import HamburgerIcon from './HamburgerIcon';
import MobileNav from '../components/MobileNav';

import { IoMdDownload } from 'react-icons/io'
import ResumeFile from '../../public/static/files/5-26-2021 Resume Ali Saadati.pdf';

const Toolbar = (props) => {

    let [windowWidth, setWindowWidth] = useState(window.innerWidth);
    let [showMobileNav, setShowMobileNav] = useState(false);

    let setScreenWidthListener = useCallback(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            if (window.innerWidth > 699) {
                // Close side menu
            }
        })
    })

    let removeScreenWidthListener = useCallback(() => {
        window.removeEventListener('resize', () => setWindowWidth(window.innerWidth))
    })

    useEffect(() => {
        setScreenWidthListener()
        return () => removeScreenWidthListener()
    }, [])

    let sideMenuNav = showMobileNav ? `${classes.hide}` : `${classes.show}`

    let navbar = windowWidth > 699 ? (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.navItem}><a href="/#About">About</a></li>
                <li className={classes.navItem}><a href="/#Projects">Projects</a></li>
                <li className={classes.downloadItem}>
                <a href={ResumeFile} download="Ali-Saadati-Resume.pdf" className={classes.resumeButton}>
                        <span>Resume</span> <IoMdDownload className={classes.downloadIcon} size="1rem" />
                    </a>
                    {/* <button className={classes.resumeButton}>
                        <span>Resume</span> <IoMdDownload className={classes.downloadIcon} size="1rem" />
                    </button> */}
                </li>
                <li className={classes.navItem}><a href="/#Contact">Contact</a></li>
            </ul>
        </nav>
    ) : (
        <nav className={classes.nav}>
            <HamburgerIcon onClick={() => setShowMobileNav(!showMobileNav)}></HamburgerIcon>
            <MobileNav show={showMobileNav} />
        </nav>
    )
    return (
        <>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
            <header className={classes.toolbar}>
                <div className={classes.titleContainer}>
                    <div className={classes.logoContainer}>
                        <a href="/"><img className={classes.logo} src={"/static/images/logos/as-logo-with-border.png"} alt="Ali Saadati logo" /></a>
                    </div>
                    <div className={classes.title}>Ali Saadati</div>
                </div>
                {navbar}
            </header>
        </>
    )
}

export default Toolbar;