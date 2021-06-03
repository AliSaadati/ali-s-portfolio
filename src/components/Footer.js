import React, { useState, useEffect } from 'react'

import * as classes from './Footer.module.scss';

import { FaGithubSquare } from 'react-icons/fa'
import { FaEnvelopeSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FiCodepen } from 'react-icons/fi'
import { IoMdDownload } from 'react-icons/io'

import ResumeFile from '../../public/static/files/5-26-2021 Resume Ali Saadati.pdf';

const Footer = (props) => {

    return (
        <>
            <div className={classes.footerHorizontalLine} />
            <footer className={classes.footer} >
                <div className={classes.logoFlex}>
                    <div className={classes.logoContainer}>
                        <img className={classes.logo} src={"/static/images/logos/as-logo-with-border.png"} alt="Ali Saadati logo" />
                    </div>
                    <span className={classes.logoEmail}>AliSaadati619@yahoo.com</span>
                </div>
                <div className={classes.iconFlex}>
                    <div className={classes.mediaIcons}>
                        <a className={classes.mediaButton}><FaEnvelopeSquare size="2rem" className={classes.mediaIcon} /></a>
                        <a className={classes.mediaButton}><FaGithubSquare size="2rem" className={classes.mediaIcon} /></a>
                        <a className={classes.mediaButton}><FiCodepen size="1.5rem" color="white" className={`${classes.mediaIcon} ${classes.codepenIcon}`} /></a>
                        <a className={classes.mediaButton}><FaLinkedin size="2rem" className={classes.mediaIcon} /></a>
                        <a href={ResumeFile} download="Ali-Saadati-Resume.pdf" className={classes.resumeButton}>
                        <span>Resume</span> <IoMdDownload className={classes.downloadIcon} size="1rem" />
                    </a>
                    </div>

                </div>
                <span className={classes.bottomEmail}>AliSaadati619@yahoo.com</span>
            </footer>
        </>
    )
}

export default Footer;