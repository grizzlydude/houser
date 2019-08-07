import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store from '../redux/store'

export default class Dashboard extends Component {
    constructor() {
        super()
        // const reduxState = store.getState()
        this.state = {
            houses: [],
            houseIndex: 0
        }
    }

componentDidMount() {
    axios.get('/api/house').then(res => {
        this.setState({
            houses: res.data
        })
    })
}

render() {
    return (
        <div>
            <header>
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>
            </header>
            <div>
                {this.state.houses.map(house => {
                    return (
                        <div>
                            <House house={house} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
    }
