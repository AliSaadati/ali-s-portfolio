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
                externalLink="http://d3sef6omsv7cgi.cloudfront.net/"
                gitHubLink="https://github.com/AliSaadati/PlugAndPlay-v2"
                introP="This Project was developed as a lightweight, web accessible alternative to traditional data reporting software."
                storyP="As a developer, I recognized the need for a highly customizable white label database reporting web application that could be easily integrated into existing systems. Driven by this vision, I set out to create a lightweight, web-accessible alternative to traditional data reporting software. Currently, the application supports MySQL and DynamoDB databases, and I am actively working on adding more features and expanding support to include additional databases. This project is a culmination of my dedication to providing flexible and efficient data reporting solutions for various business needs."
                goalP="To allow users to create, store, and manipulate custom database queries through a clean, intuitive, responsive web application. The UX is designed for a user base that need not have extensive knowledge in using databases and writing database queries. Additionally, the ability to configure scheduled report generation and automated report delivery was introduced as an additional feature."
                techP="The front end is written using **React** and **Material-UI**. The back end runs on **AWS Lambda** and **API Gateway** using **NodeJs**. The application is hosted on **AWS S3**, and database is **PostgreSQL** - (also supports **MySQL**)."
                ></ProjectPage>
        </Layout>
    )
    
}

export default PlugAndPlayDatabase;