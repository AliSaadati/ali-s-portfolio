import React, { useState } from 'react';
import * as classes from './HamburgerIcon.module.scss';

const HamburgerIcon = (props) => {

    let [isActive, setIsActive] = useState(false);

    return (
        <>
            <button role="button" onClick={() => {
                setIsActive(!isActive);
                props.onClick();
            }}
                className={classes.hamburgerButton}>
                <div className={classes.plates} >
                    <div className={`${classes.plate} ${classes.plate4} ${isActive ? classes.active : null}`} >
                        <svg className={`${classes.burger} ${classes.svg}`} version="1.1" height="100" width="100" viewBox="0 0 100 100">
                            <path className={`${classes.line} ${classes.line1}`} d="M 50,35 H 30" />
                            <path className={`${classes.line} ${classes.line2}`} d="M 50,35 H 70" />
                            <path className={`${classes.line} ${classes.line3}`} d="M 50,50 H 30" />
                            <path className={`${classes.line} ${classes.line4}`} d="M 50,50 H 70" />
                            <path className={`${classes.line} ${classes.line5}`} d="M 50,65 H 30" />
                            <path className={`${classes.line} ${classes.line6}`} d="M 50,65 H 70" />
                        </svg>
                        <svg className={`${classes.x} ${classes.svg}`} version="1.1" height="100" width="100" viewBox="0 0 100 100">
                            <path className={classes.line} d="M 34,32 L 66,68" />
                            <path className={classes.line} d="M 66,32 L 34,68" />
                        </svg>
                    </div>
                </div>

                <svg className={classes.svg}>
                    <defs>
                        <filter id="gooeyness">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
                            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </button>
        </>
    )
}


export default HamburgerIcon;

