import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './leafletmap.css'
import Layout from '../components/layout'

class LeafletMap extends React.Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [41, -1],
    zoom: 15,
    markerText: ""
  }

    render() {

        return (
          <Layout>
            <MapContainer
            className="markercluster-map"
            center={[25.0, -72]}
            zoom={4}
            maxZoom={18}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.props.markerText !== "" &&
          <Marker position={this.props.position}>
            <Popup>{this.props.markerText}</Popup>
          </Marker>
          }
          </MapContainer>
          </Layout>
        );
    }
  }
  
  export default LeafletMap