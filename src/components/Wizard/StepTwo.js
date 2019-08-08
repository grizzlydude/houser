import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_TWO } from '../redux/store'
import axios from 'axios'

export default class StepTwo extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        this.state = {
            image: ''
        }
    }

        componentDidMount() {
            store.subscribe(() => {
                const reduxState = store.getState()
                this.setState({
                    image: reduxState.image
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
                type: STEP_TWO,
                payload: this.state
            })
            let reduxState = store.getState()
            console.log(reduxState)
        }

        clear = () => {
            this.setState({
                image: ''
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
                    <span>Image URL: <input onChange={e => { this.handleChange('image', e) }} name="category" type="text" /></span>
                    <Link to='/wizard/step1'>
                        <button>Previous Step</button>
                    </Link>
                    <Link to='/wizard/step3'>
                        <button onClick= {this.nextStep}>Next Step</button>
                    </Link>
                </div>
            )
        }
    }