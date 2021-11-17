import React from "react"
import Layout from "../components/layoutMap"
import LeafletMap from "../components/leafletmap"
import { Link } from "gatsby"


const map = () => (
  <Layout>
    <section style={{ "margin": "0.5rem 1rem" }}>
    <div>
    <Link to="/">Home&nbsp;</Link>
    <Link to="/about">About&nbsp;</Link>
    <Link to="/blog">Blog&nbsp;</Link>
    <Link to="/pokemon">Pokemon</Link>
    </div>
      <p> </p>
      <p>Displaying a simple map with a marker and pop-up.</p>
      <p>Marker 1 is located near the picture from the Home Page.</p>
      <p>For more information: <a href="https://www.andrewl.net/article/gatsby-geo-simple-map">https://www.andrewl.net/article/gatsby-geo-simple-map</a></p>
    </section>

    {typeof window !== 'undefined' &&
        <LeafletMap
          position={[20.2,-87.435]}
          zoom={8}
          markerText={"Marker 1"}
        />
    }

  </Layout>
  )

  export default map