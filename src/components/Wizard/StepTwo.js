import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import store, { STEP_TWO } from '../redux/store'
import axios from 'axios'

export default class StepTwo extends Component {
    state = {
        image: ''
    }

    nextStep = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
        let reduxState = store.getState()
        console.log(reduxState)
        axios.post('/api/house', reduxState).catch(err => alert(err))
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
                <input placeholder='Image URL' />
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

// class StepTwo extends Component {
//     state={
//         quantity:0,
//         price: 0,
//     }

//     handleChange = e =>{
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     submit = () =>{
//         store.dispatch({
//             type: STEP_TWO,
//             payload: this.state
//         })
//         let reduxState = store.getState()
//         console.log(reduxState)
//         axios.post('/api/inventory',reduxState).catch(err => alert(err))
//     }
// render() {
//     return (
//         <div className="StepTwo">
//             <span>Quantity: <input onClick={e => this.handleChange(e)} name="quantity" type="number"/></span>
//             <span>Price: <input onClick={e => this.handleChange(e)} name="price" type="number"/></span>
//             <div>
//                 <Link to="/wizard/step1">
//                     <button>Go Back</button>
//                 </Link>
//                 <Link to="/">
//                     <button onClick={this.submit}>Submit</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }
// }

// export default StepTwo;