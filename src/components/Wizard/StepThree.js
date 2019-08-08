import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_THREE } from '../redux/store'
import axios from 'axios'

class StepThree extends Component {
    constructor() {
        super()
        let reduxState = store.getState()
        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.morgage,
                rent: reduxState.morgage
            })
        })
    }

    handleChange = (props, e)=> {
        this.setState({
            [props]: e.target.value
        })
    }

    complete = () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log('hit: ', reduxState)
        axios.post('/api/house', reduxState).catch(err => alert(err))
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
                <span>Morgage: <input onChange={e => this.handleChange('morgage',e)} type='number' /></span>
                <span>Rent: <input onChange={e => this.handleChange('rent',e)} type='number' /></span>
                <div>
                    <Link to='/wizard/step2'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={this.complete}>Complete</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StepThree