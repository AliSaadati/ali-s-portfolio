
import React, { useState, useRef, useEffect, useCallback } from 'react'
import * as classes from './AboutCard.module.scss';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


gsap.registerPlugin(ScrollTrigger);

const AboutCard = (props) => {

    const isBrowser = typeof window !== "undefined"
    if (isBrowser) 
        ScrollTrigger.refresh();

    let topScrollRef = useRef();
    let topTimelineScrollUnfilledRef = useRef();
    let bottomScrollRef = useRef();
    let bottomTimelineScrollUnfilledRef = useRef();
    let yearRef = useRef();
    let cardRef = useRef();


    let updateLine = (boundingRef, lineRef) => {
        let elem = boundingRef.current.getBoundingClientRect();
        var midway = window.innerHeight / 1.5;

        if (100 - ((midway - elem.top) * (100 / elem.height)) >= 100) lineRef.current.style.strokeDashoffset = 100;
        else if (100 - ((midway - elem.top) * (100 / elem.height)) <= 0) lineRef.current.style.strokeDashoffset = 0;
        else
            lineRef.current.style.strokeDashoffset = 100 - ((midway - elem.top) * (100 / elem.height));
    }

    let updateTimelineScroll = () => {

        updateLine(topScrollRef, topTimelineScrollUnfilledRef);
        updateLine(bottomScrollRef, bottomTimelineScrollUnfilledRef)
    }

    let setScrollListener = useCallback(() => {
        window.addEventListener('scroll', () => updateTimelineScroll())
    })
    let removeScrollListener = useCallback(() => {
        window.removeEventListener('scroll', () => updateTimelineScroll())
    })



    useEffect(() => {

        gsap.to(cardRef.current,{
            scrollTrigger: {
                trigger: cardRef.current,
                start: "center 66%",
            },            
            opacity: 1,
            x:0
        })
        
        let tlYear = gsap.timeline({
            scrollTrigger: {
                trigger: yearRef.current,
                start: "center 66%"
            }
        })

        tlYear.to(yearRef.current, { 
            scale:1.2,
            duration:.4,
            // backgroundColor: "#FFA852",
            // background:"#FFA852",
            background:"linear-gradient(180deg,  #FFA852, #FF6C6C)"
            
        })
        .to(yearRef.current, {
            scale:1,
            duration:.3,
            // backgroundColor: "#FFA852",

        })

        // let tl = gsap.timeline({
        //     // yes, we can add it to an entire timeline!
        //     scrollTrigger: {
        //         trigger: cardRef.current,
        //         start: "center center",
        //     }
        // });

        // // add animations and labels to the timeline
        // tl.addLabel("start")
        //     .to(cardRef.current, { opacity:1, x:0})

    }, [])

    useEffect(() => {
        setScrollListener()
        return () => removeScrollListener()
    }, [])


    // useEffect(() => {

    //     let elem = topScrollRef.current.getBoundingClientRect();
    //     var midway = window.innerHeight / 2;


    //     // timelineScrollUnfilledRef.css("stroke-dashoffset", 1000 - (midway - elem.top));


    // }, [])


    return (
        <>
            <div className={classes.aboutRowFlex}>
                <div className={classes.timelineFlex}>
                    <svg className={classes.topScroll}
                        ref={el => topScrollRef.current = el}
                        version="1.1" viewBox="0 0 1 100">
                        <path className={classes.timelineScrollFilled} d="M 0 0 L 0 100" />
                        <path className={classes.timelineScrollUnfilled}
                            ref={el => topTimelineScrollUnfilledRef.current = el}
                            d="M 0 0 L 0 100" />
                    </svg>
                    <div className={classes.yearDot}
                        ref={el => yearRef.current = el}
                    ><span>{props.year}</span></div>
                    <svg className={classes.bottomScroll}
                        ref={el => bottomScrollRef.current = el}
                        version="1.1" viewBox="0 0 1 100">
                        <path className={classes.timelineScrollFilled} d="M 0 0 L 0 100" />

                        <path className={classes.timelineScrollUnfilled}
                            ref={el => bottomTimelineScrollUnfilledRef.current = el}
                            d="M 0 0 L 0 100" />
                    </svg>
                </div>
                <div className={classes.aboutCard}
                    ref={el => cardRef.current = el}
                >
                    <div className={classes.aboutCardArrow} />
                    <p className={classes.aboutCardImageContainer}><img src={props.imageSource} alt={props.imageAlt} /></p>
                    <p
                        className={`${classes.aboutCardDesription} desc`}>{props.children}</p>
                </div>
            </div>
        </>
    )
}

export default AboutCard;