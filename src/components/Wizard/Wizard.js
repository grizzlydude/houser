import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { ADDING_HOUSE } from '../redux/store'
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            property_name: '',
            the_address: '',
            city: '',
            the_state: '',
            zip: 0
        }
        this.clear = this.clear.bind(this)
    }
f
    handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    submit = () => {
        store.dispatch({
            type: ADDING_HOUSE,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log(reduxState)
        axios.post('/api/house', reduxState).catch(err => alert(err))
    }
    
    clear = () => {
        this.setState({
            property_name: '',
            the_address: '',
            city: '',
            the_state: '',
            zip: 0
        })
    }

    render() {
        return (
            <div>
                <h1>ADDING A HOUSE</h1>
                <span>House Name:<input onChange={e => this.handleChange(e)} name="itemName" type="text" /></span>
                <span>Address<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>City<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>State<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>Zip<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
            <Link to='/'>
                <button onClick={this.submit}>Submit</button>
            </Link>
            <Link to='/'>
                <button>Cancel</button>
            </Link>
            <button onClick={this.clear}>Clear</button>
            </div >
        )
    }
}