import React, { useState, useEffect, useCallback } from 'react'

import * as classes from './ProjectCard.module.scss';

import { FaGithub } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'


const ProjectCard = (props) => {


    const isBrowser = typeof window !== "undefined"
    let browserWindowWidth = isBrowser ? window.innerWidth : 0;

    let [windowWidth, setWindowWidth] = useState(browserWindowWidth)

    let setScreenWidthListener = useCallback(() => {
        window.addEventListener('resize', () => setWindowWidth(browserWindowWidth))
    })

    let removeScreenWidthListener = useCallback(() => {
        window.removeEventListener('resize', () => setWindowWidth(browserWindowWidth))
    })

    useEffect(() => {
        setScreenWidthListener()
        return () => removeScreenWidthListener()
    }, [])

    return (

        <>
            {windowWidth > 699 ?
                <div className={classes.projectCard}>
                    <div className={classes.projectCardContent}>

                        <div className={classes.projectImageContainer}>
                            <a href={props.projectDetailsUrl}>
                                <img className={props.imageShadow ? classes.imageShadow : null} src={`/static/images/${props.imageFileName}`} alt={props.imageAlt}
                                    onLoad={() => props.setImagesLoaded(props.imagesLoaded + 1)} />
                            </a>

                        </div>
                        <div className={classes.projectInfoContainer}>
                            <h3 className={classes.projectTitle}>{props.title}</h3>
                            <p className={classes.projectDescription}>{props.description}</p>
                            {props.children}
                        </div>
                    </div>

                    <div className={classes.buttonFlex}>
                        <a href={props.projectDetailsUrl} className={` ${classes.moreDetailsLink} ${classes.button}`}>More Details</a>
                        <div className={classes.additionalLinks}>
                            {props.gitHubUrl ? <a href={props.gitHubUrl} className={` ${classes.gitHubLink} ${classes.button}`}><FaGithub /></a> : null}
                            <a href={props.liveLink} className={` ${classes.liveLink} ${classes.button}`}><HiExternalLink /></a>
                        </div>
                    </div>

                </div>
                :
                <div className={classes.projectCard}>
                    <div className={classes.projectCardContent}>
                        <div className={classes.projectImageContainer}>
                            <a href={props.projectDetailsUrl} >
                                <img className={props.imageShadow ? classes.imageShadow : null} src={`/static/images/${props.imageFileName}`} alt={props.imageAlt}
                                    onLoad={() => props.setImagesLoaded(props.imagesLoaded + 1)} />
                            </a>
                        </div>
                        <div className={classes.projectInfoContainer}>
                        <h3 className={classes.projectTitle}>{props.title}</h3>
                            <p className={classes.projectDescription}>{props.description}</p>
                            {props.children}
                        </div>
                    </div>

                    <div className={classes.buttonFlex}>
                        <a href={props.projectDetailsUrl} className={` ${classes.moreDetailsLink} ${classes.button}`}>More Details</a>
                        <div className={classes.additionalLinks}>
                            <a href={classes.gitHubUrl} className={` ${classes.gitHubLink} ${classes.button}`}><FaGithub /></a>
                            <a href={props.liveLink} className={` ${classes.liveLink} ${classes.button}`}><HiExternalLink /></a>
                        </div>
                    </div>

                </div>
            }
        </>
    )

}

export default ProjectCard;