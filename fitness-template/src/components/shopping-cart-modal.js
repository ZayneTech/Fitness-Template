import React, { useContext } from 'react';
import { cartContext } from '../context/cart-context';
import { Exit } from './svgs';
import core from '../assets/images/core-girl-opt.jpg'
import deadlift from '../assets/images/dark-deadlift-opt.jpg'
import '../assets/stylesheets/shoppingcart.css'

const ShoppingCart = () => {

    const [cartIsOpen, setCartIsOpen] = useContext(cartContext);

    /* Close Shopping Cart Modal If You Click Background */
    const closeShoppingCart = ({target, pageX, pageY}) => {
        const background = document.querySelector('.modal-container');
        const modal = document.querySelector('.modal');
        const modalRect= modal.getBoundingClientRect();

        const mouse = {
            x: pageX,
            y: pageY
        }

        if (target === background) {
            setCartIsOpen(false);
        }

       /* if(mouse.x < modalRect.left || mouse.x > modalRect.right || mouse.y < modalRect.top || mouse.y > modalRect.bottom) {
           setCartIsOpen(false)
        } */
    }

    return(
    /*Shopping Cart Modal */  

    <div className="modal-container" onClick={(e) => closeShoppingCart(e)}>
        <div className="modal">
            <header className="modal-header">
                <h2>Your Shopping Cart</h2>
                <div onClick={() => setCartIsOpen(false)}>
                    <Exit color='#000'/>
                </div>
            </header>

            <div className="modal-body">

                <table>
                    <thead className="table-head">
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
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
                <button className="close" onClick={() => setCartIsOpen(false)}>Close</button>
                <button className="green">Checkout</button>
            </div>
        </div>
    </div>
    )
}

export default ShoppingCart;