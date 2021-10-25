//post.js

import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
class Post extends Component {
  render() {
    const post = this.props.data.wpPost
    return (
      <>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </>
    )
  }
}


const data = JSON.stringify({
    query: `query($id: String!) {
		allWpPost {
			title
			content
		}
	}`,
    variables: `{
        "id": "${id}"
      }`,
  });