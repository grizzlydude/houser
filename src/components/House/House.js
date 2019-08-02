import React, { Component } from 'react'

export default class House extends Component {
    render() {
        return(
            <div>
                <h2>Property Name: {this.props.house.property_name}</h2>
                <h2>Address: {this.props.house.the_address}</h2>
                <h2>City: {this.props.house.city}</h2>
                <h2>State: {this.props.house.the_state}</h2>
                <h2>Zipcode: {this.props.house.zip}</h2>
            </div>
        )
    }
}

