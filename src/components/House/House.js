import React, { Component } from 'react'

export default class House extends Component {
    render() {
        return(
            <div>
                <img src={this.props.house.image} />
                <h4>Property Name: {this.props.house.property_name}</h4>
                <h4>Address: {this.props.house.the_address}</h4>
                <h4>City: {this.props.house.city}</h4>
                <h4>State: {this.props.house.the_state}</h4>
                <h4>Zipcode: {this.props.house.zip}</h4>
                <h4>Morgage: {this.props.house.morgage}</h4>
                <h4>Rent: {this.props.house.rent}</h4>
            </div>
        )
    }
}

