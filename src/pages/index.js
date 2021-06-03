

import React, { useState, useCallback, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as classes from '../stylesheets/styles.module.scss';
import AboutCard from '../components/AboutCard';
import Toolbar from '../components/Toolbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ProjectIcons from '../components/ProjectIcons';

import { GrReactjs } from 'react-icons/gr'
import { IoLogoNodejs } from 'react-icons/io'
import { FaDatabase } from 'react-icons/fa'
import { FaAws } from 'react-icons/fa'
import { SiGatsby } from 'react-icons/si'



const About = () => {

    const isBrowser = typeof window !== "undefined"
    let browserWindowWidth = isBrowser ? window.innerWidth : 0;
    
    let [imagesLoaded, setImagesLoaded] = useState(0);

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

    let hero = null;

    if (windowWidth > 699) {
        hero = (
            <div className={classes.heroFlex}>
                <div className={`${classes.heroFlexCol} ${classes.heroTitleCol}`}>
                    <h1 className={classes.title}>San Diego based web designer and developer</h1>
                    <p className={classes.subTitle}>Crafting effective and engaging web apps and websites</p>
                    <button className={classes.bigButton}>Let's Connect!</button>
                </div>
                <div className={`${classes.heroFlexCol} ${classes.heroImageCol}`}>
                    <img className={classes.heroImage} src="/static/images/hero-profile-image-ali.png" alt="Profile - Ali Saadati" />
                </div>
            </div>
        )
    }
    else if (windowWidth < 700) {
        hero = (
            <div className={classes.heroFlex}>
                <div className={classes.heroFlexCol}>
                    <h1 className={classes.title}>San Diego based web designer and developer</h1>
                    <p className={classes.subTitle}>Crafting effective and engaging web apps and websites</p>
                    <img className={classes.heroImage} src="/static/images/hero-profile-image-ali.png" alt="Profile - Ali Saadati" />
                    <button className={classes.bigButton}>Let's Connect!</button>
                </div>

            </div>
        )
    }

    let dbApiProjIcons = (
        <ul className={classes.projIconList}>
            <li><span className={classes.skill}>
                <GrReactjs className={`${classes.iconR} ${classes.icon}`} />React
                    </span></li>
            <li><span className={classes.skill}>
                <IoLogoNodejs className={`${classes.iconN} ${classes.icon}`} />NodeJs
                    </span></li>
            <li><span className={classes.skill}>
                <FaAws className={`${classes.iconA} ${classes.icon}`} />AWS</span></li>
            <li><span className={classes.skill}>
                <FaDatabase className={`${classes.iconD} ${classes.icon}`} />MySQL</span></li>
        </ul>
    ),
        ccProjIcons = (
            <ul className={classes.projIconList}>
                <li><span className={classes.skill}>
                    <GrReactjs className={`${classes.iconR} ${classes.icon}`} />React
            </span></li>
                <li><span className={classes.skill}>
                    <IoLogoNodejs className={`${classes.iconN} ${classes.icon}`} />NodeJs
            </span></li>
                <li><span className={classes.skill}>
                    <FaAws className={`${classes.iconA} ${classes.icon}`} />AWS</span></li>
                <li><span className={classes.skill}>
                    <FaDatabase className={`${classes.iconD} ${classes.icon}`} />NoSQL</span></li>
            </ul>
        )

    let cards = (
        <>
            <ProjectCard
                title="Database/API Plug & Report"
                description="A white label database reporting system that easily connects to an API or MySQL Database and allows users to generate reports on a scheduled basis."
                projectDetailsUrl="/projects/PlugAndPlayDatabase"
                gitHubUrl="https://www.github.com/alisaadati"
                liveLink=""
                setImagesLoaded={setImagesLoaded}
                imagesLoaded={imagesLoaded}
                imageFileName="db-card-image.png"
                imageAlt="Database, API Plug and Report Web Application"
            >
                {dbApiProjIcons}
            </ProjectCard>
            <ProjectCard
                title="Camille's Cakery"
                description="Multipage website designed and developed for local pastry/dessert business."
                projectDetailsUrl="/projects/CamillesCakery"
                gitHubUrl="https://www.github.com/alisaadati"
                liveLink="http://camilles-cakery-web-app.s3-website-us-west-1.amazonaws.com/"
                setImagesLoaded={setImagesLoaded}
                imagesLoaded={imagesLoaded}
                imageFileName="camilles-cakery-card.png"
                imageShadow={true}
                imageAlt="Camille's Cakery"
            >
                {ccProjIcons}
            </ProjectCard>


        </>
    )

    return (
        <>
            <Toolbar />
            <main className={classes.main}>
                <section className={classes.hero}>
                    <div className={classes.heroBackground}></div>
                    <div className={classes.heroContainer}>
                        {hero}
                    </div>
                </section>
                <section id="Projects" className={classes.projects}>
                    <div className={classes.horizontalLine} />
                    <h2>Projects</h2>
                    <div className={classes.horizontalLine} />

                    {cards}
                </section>
                <section id="About" className={classes.about}>
                    <div className={classes.horizontalLine} />
                    <h2>About Me</h2>
                    <div className={classes.horizontalLine} />

                    <div className={classes.aboutCards} >
                        <AboutCard imageSource={"/static/images/logos/sdsu-logo.png"} imageAlt={"San Diego State University Logo"} year="2016">In December of 2016 I received a Bachelor of Science in Computer Science from San Diego State University.</AboutCard>
                        <AboutCard imageSource={"/static/images/logos/m-logo.png"} imageAlt={"Mitchell International Logo"} year="2017">in 2017 I began working as a software development engineer at Mitchell International where I was responsible for developing and maintaining custom test frameworks used company wide. Some of the key learning points of the position were coding best practices, deployment CI/CD, automation, test driven development, architecture design, and team management and organization.</AboutCard>
                        <AboutCard imageSource={"/static/images/logos/as-logo.png"} imageAlt={"Ali Saadati Logo"} year="2019">In 2019 I began working as a freelance developer, focusing on single page applications and multipage websites with particular attention to responsive design. During this time I’ve acquired a variety of soft skills and broad technical expertise including business negotiation, customer relations, </AboutCard>
                        <AboutCard imageSource={"/static/images/logos/as-logo.png"} imageAlt={"AS Logo"} year="2021">Open to full time front-end / full stack employment opportunities. Contact me at Saadati.Ali619@gmail.com or shoot me a message below.</AboutCard>
                    </div>
                </section>
                <section id="Contact" className={classes.contact}>
                    <div className={classes.horizontalLine} />
                    <h2>Contact</h2>
                    <div className={classes.horizontalLine} />

                    <ContactForm />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;