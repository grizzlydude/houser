import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null
        }
    }

    render() {
        return (
            <div>
                <h1>ADDING A HOUSE</h1>
                <Link to='/'>
                    <button>Submit</button>
                </Link>
                <Link to='/'>
                    <button>Go Back</button>
                </Link>
            </div>
        )
    }
}