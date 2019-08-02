import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }
    render() {
        return (
            <div>
                <House />
                <Link to='/wizard'>
                    <button>Add a House</button>
                </Link>
            </div>
        )
    }
}

// render() {
//     return (
//       <div className="Inventory">
//         <h1>Inventory</h1>
//         {this.state.inventory.map(item => {
//           return (
//             <div style={{ display: "flex" }}>
//               <h1>{item.item_name}</h1>
//               <h1>{item.category}</h1>
//               <h1>{item.quantity}</h1>
//               <h1>{item.price}</h1>
//             </div>
//           );
//         })}
//         <Link to="/wizard/step1">
//           <button>Add Item</button>
//         </Link>
//       </div>
//     );
//   }
// }