import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_ONE } from '../redux/store'
import axios from 'axios'

class StepOne extends Component {
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

    handleChange = (e) => {
        [e.target.name] = e.target.value
    }

    nextStep = () => {
        store.dispatch({
            type: STEP_ONE,
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
                <header>
                    <h1>Add New Listing</h1>
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </header>
                <span>House Name:<input onChange={e => this.handleChange(e)} name="itemName" type="text" /></span>
                <span>Address<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>City<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>State<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <span>Zip<input onChange={e => this.handleChange(e)} name="category" type="text" /></span>
                <Link to='/wizard/step2'>
                    <button onClick={this.nextStep}>Next Step</button>
                </Link>

                <button onClick={this.clear}>Clear</button>
            </div >
        )
    }
}

export default StepOne;