import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/layout';
import Sidebar from '../components/Sidebar';


const About = () => {
    const {site} = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <Layout>
            <h1>Abut me</h1>
            <Link to="/">Back</Link>
            <Sidebar description={site.siteMetadata.title}></Sidebar>
            
        </Layout>

    )
}

export default About
