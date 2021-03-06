//blog.js

//import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as React from 'react'

const BlogPage = ({ data }) => {
	return (
	<Layout pageTitle="Ivan's Blog Posts">
		<ul>			
		{
			data.allWpPost.edges.map(({node}) => 
			(<div>
				<h1>{node.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
			</div>
			))}
		</ul>
	</Layout>
	)
}

export const query = graphql`
  query {
    allWpPost (sort: { fields: [date] } ) {
      edges {
          node{
           title
           excerpt
           slug
          }
      }
    }
  }
`

export default BlogPage