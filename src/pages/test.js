import React, { useState, useRef, useEffect, useCallback } from 'react'
import * as classes from '../components//Test.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import AboutCard from '../components/AboutCard'
gsap.registerPlugin(ScrollTrigger);

const Test = (props) => {

    let box = useRef();

    useEffect(() => {
        gsap.to(box.current, {
            scrollTrigger: {
                trigger: box.current,
                start: "top top"
            },

            x: 500
        });


    }, [])

    return (
        <>
        <div style={{padding:"1500px 0 1500px 0"}}>
        <AboutCard year="2016">In December of 2016 I received a Bachelor of Science in Computer Science from San Diego State University.</AboutCard>
        <AboutCard year="2017">in 2017 I began working as a software development engineer at Mitchell International where I was responsible for developing and maintaining custom test frameworks used company wide. Some of the key learning points of the position were coding best practices, deployment CI/CD, automation, test driven development, architecture design, and team management and organization.</AboutCard>
        <AboutCard year="2019">In 2019 I began working as a freelance developer, focusing on single page applications and multipage websites with particular attention to responsive design. During this time I’ve acquired a variety of soft skills and broad technical expertise including business negotiation, customer relations, </AboutCard>
        <AboutCard year="2021">Open to full time front-end / full stack employment opportunities. Contact me at Saadati.Ali619@gmail.com or shoot me a message below.</AboutCard>
        </div>
        </>
    )

}

export default Test;