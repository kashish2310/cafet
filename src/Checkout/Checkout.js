import React from 'react'
import "./Checkout.css";
// import CheckoutImg2 from "../../src/images/CheckoutImg2.jpg";
import Subtotal from './Subtotal';

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
           <img className="checkout__ad" src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            

            <div>
                <h2 className="checkout__title"> Your Order Basket</h2>
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        
        </div>
        </div>
    )
}

export default Checkout
