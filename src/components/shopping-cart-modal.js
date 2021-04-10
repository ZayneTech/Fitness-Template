import React from 'react';
import '../assets/stylesheets/shoppingcart.css'
import core from '../assets/images/core-girl-opt.jpg'
import deadlift from '../assets/images/dark-deadlift-opt.jpg'
import { Exit } from './svgs';

const ShoppingCart = () => {
    return(
    /*Shopping Cart Modal */  

    <div className="modal-container">
        <div className="modal">
            <header className="modal-header">
                <h2>Your Shopping Cart</h2>
                <Exit color='#000' />
            </header>

            <div className="modal-body">

                <table>
                    <thead className="table-head">
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Action</th>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src={core}/></td>
                            <td>Core Strength</td>
                            <td>$99.99</td>
                            <td><button className="button">Remove</button></td>
                        </tr>

                        <tr>
                            <td><img src={deadlift}/></td>
                            <td>Full Body Split</td>
                            <td>$99.99</td>
                            <td><button className="button">Remove</button></td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Total:</td>
                            <td className="total-price">$199.98</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <div className="modal-footer">
                <button className="close">Close</button>
                <button className="green">Checkout</button>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart;