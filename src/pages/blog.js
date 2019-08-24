import React from 'react'
import Layout from '../components/layout';
import {Link, useStaticQuery, graphql} from 'gatsby'

const Blog = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              html
            }
          }
        }
      }
      
    `)

    console.log(allMarkdownRemark)
    return (
        <Layout>
            <h1>Blog page</h1>
            <Link to="/">Home</Link>

            <ul>
                {allMarkdownRemark.edges.map(({node}) => <li>
                    <h2><a href="#">{node.frontmatter.title}</a></h2>
                    <span>{node.frontmatter.date}</span>
                    <div className="inner-content" dangerouslySetInnerHTML={{__html:node.html}}>
                    </div>
                  </li>)}
            </ul>
            
        </Layout>
    )
}

export default Blog
