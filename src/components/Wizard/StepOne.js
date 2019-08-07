import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_ONE } from '../redux/store'
import axios from 'axios'

class StepOne extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            property_name: '',
            the_address: '',
            city: '',
            the_state: '',
            zip: 0
        }
        this.clear = this.clear.bind(this)
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                property_name: reduxState.property_name,
                the_address: reduxState.the_address,
                city: reduxState.city,
                the_state: reduxState.the_state,
                zip: reduxState.zip
            })
        })
    }

    handleChange = (prop, e) => {
        this.setState({
            [prop]: e.target.value

        })
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
                <span>House Name:<input onChange={e => this.handleChange('property_name', e)} name="itemName" type="text" /></span>
                <span>Address<input onChange={e => this.handleChange('the_address', e)} name="category" type="text" /></span>
                <span>City<input onChange={e => this.handleChange('city',e)} name="category" type="text" /></span>
                <span>State<input onChange={e => this.handleChange('the_state',e)} name="category" type="text" /></span>
                <span>Zip<input onChange={e => this.handleChange('zip',e)} name="category" type="text" /></span>
                <Link to='/wizard/step2'>
                    <button onClick={this.nextStep}>Next Step</button>
                </Link>

                <button onClick={this.clear}>Clear</button>
            </div >
        )
    }
}

export default StepOne;