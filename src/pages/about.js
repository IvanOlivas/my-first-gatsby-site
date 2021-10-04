// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
const AboutPage = () => {
    return (
      <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        <p>My name is Ivan Olivas.</p>
        <p>Fun Fact: I have been to four different countries outside of the USA.</p>
        <p>They are Mexico, Argentina, Uruguay, and Ecuador.</p>
      </Layout>
    )
}

// Step 3: Export your component
export default AboutPage