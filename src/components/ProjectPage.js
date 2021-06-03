import React, { useState, useEffect } from 'react'

import { FaGithub } from 'react-icons/fa'
import { HiExternalLink } from 'react-icons/hi'

import * as classes from './ProjectPage.module.scss';

import Markdown from 'markdown-to-jsx';

const ProjectPage = (props) => {

    let imageClasses = [classes.heroImage]
    if (props.imageShadow) imageClasses.push(classes.imageShadow)

    return (
        <div className={classes.projectPage}>
            <div className={classes.hero}>
                <p className={classes.superHeading}>Projects</p>
                <h1 className={classes.Title}>{props.title}</h1>
            </div>

            <div className={classes.heroImageFlex} >
                <img src={props.imageSource} alt={props.imageAlt} className={imageClasses.join(" ")} />
                <p className={classes.link} tabIndex="0">
                    <a className={classes.linkA} href={props.externalLink}><HiExternalLink className={classes.linkIcon}/><span className={classes.linkDescription}>Visit page</span></a>
                </p>
                <p className={classes.link} tabIndex="0">
                    <a className={classes.linkA} href={props.gitHubLink}><FaGithub className={classes.linkIcon}/><span className={classes.linkDescription}>View code on GitHub</span></a>
                </p>
            </div>
            <div className={classes.content}>

                <h2>The Story</h2>

                <p className={classes.introP}>{props.introP}</p>

                <p>{props.storyP}</p>

                <h2>The Goal</h2>

                <p>{props.goalP}</p>

                <h2>Tech Used</h2>

                <p><Markdown children={props.techP}></Markdown></p>
            </div>
        </div>
    )
}

export default ProjectPage;