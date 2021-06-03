import React, { useState, useEffect } from 'react'
import Layout from '../../components/Layout'
import ProjectPage from '../../components/ProjectPage'

const PlugAndPlayDatabase = (props) => {

    return (
        <Layout>
            <ProjectPage
                title="Plug & Play Database Reporting"
                imageSource="/static/images/db-card-image.png"
                imageShadow={false}
                imageAlt="Plug and Play Database Reporting Web App Screenshot"
                externalLink="http://camilles-cakery-web-app.s3-website-us-west-1.amazonaws.com/"
                gitHubLink="https://www.github.com/alisaadati"
                introP="This Project was developed as a lightweight, web accessible alternative to traditional data reporting software."
                storyP="As a developer, my aim is to provide a highly customizable white label database reporting web application that can be easily integrated into existing systems. The web application is currently capable of  reporting using MySQL and DynamoDB databases. Additional features and support for additional databases is currently being worked on."
                goalP="To allow users to create, store, and manipulate custom database queries through a clean, intuitive, responsive web application. The UX is designed for a user base that need not have extensive knowledge in using databases and writing database queries. Additionally, the ability to configure scheduled report generation and automated report delivery was introduced as an additional feature."
                techP="The front end is written using **React** with custom and **React-Bootstrap** components. The back end is **NodeJs** and **Express**. The application is hosted on an **Nginx** server using **PM2** for app management and monitoring. The database types currently suported are **MySQL** and **AWS DynamoDB**."
                ></ProjectPage>
        </Layout>
    )
    
}

export default PlugAndPlayDatabase;