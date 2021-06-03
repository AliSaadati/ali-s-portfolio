import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import ProjectPage from '../../components/ProjectPage'

const CamillesCakery = (props) => {

    return (
        <Layout>
            <ProjectPage
                title="Camille's Cakery"
                imageSource="/static/images/camilles-cakery-card.png"
                imageShadow={true}
                imageAlt="Camille's Cakery Website Screenshot"
                externalLink="http://camilles-cakery-web-app.s3-website-us-west-1.amazonaws.com/"
                gitHubLink="https://www.github.com/alisaadati"
                introP="Camille’s Cakery is a local cake & dessert shop which specializes in customer themed party packages for various occasions."
                storyP="Covid-19 has drastically changed the way businesses seek to connect and engage with their customer. Many business owners have been forced to adapt to a new distanced approach to conducting business. The charm of Camille’s Cakery was all but lost when they were forced to put face to face interactions on hold. A challenge faced was to recreate a similar experience to the traditional consultation, through a digital platform."
                goalP="To provide customer an elegant website to showcase base products, educate customer on custom package ordering, allow customers to provide feedback and to provide a platform where  customers can share their experience with others."
                techP="The front end was written with **React** and the back end is completely cloud based using **AWS Lambda** w/ **NodeJs** for customer image uploads, reviews, and contact forms and **AWS API Gateway** for the RESTful API. User image uploads and web hosting are done in **AWS S3**. Data is stored in a ***NoSQL*** database using **AWS DynamoDB**."
                ></ProjectPage>
        </Layout>
    )
    
}

export default CamillesCakery;