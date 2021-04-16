import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Order.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IeMbLFqESutX7DvfiS6y1E5yW1WEfveAw4v2p0M78kbdvzaiu3eA9OxwUYMEQagK7L62TJD1OpEUPM0jWcPJ99A00Ujn7nKli');


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState(null)
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        setOrder(data);
    };

    const handlePaymentSuccessfully = paymentId => {
        const orderData = {
            name: order.name,
            email: order.email,
            price: order.price,
            paymentId,
        }
        fetch('http://localhost:8050/addOrder', {
            method: 'POST',
            headers: {'Content-Type' : 'Application/json'},
            body: JSON.stringify(orderData)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <div className="p-5 row order">
            <div className="col-md-6" style={{display: order ? 'none' : 'block'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="order-form">
                            <input name="name" type="text" defaultValue={loggedInUser.displayName} placeholder="Your Name" ref={register} />
                            
                            <input name="email" type="email" defaultValue={loggedInUser.email} placeholder="Your Email" ref={register} />
                            
                            <input name="price" type="text" defaultValue="" placeholder="Order Price" ref={register} />
                        </div>
                        <input type="submit" />
                </form>
            </div>

            <div className="col-md-6 ps-5" style={{display: order ? 'block' : 'none'}}>
                <h6>Pay With</h6>
                <Elements stripe={stripePromise}>
                    <CheckoutForm successfulPayments={handlePaymentSuccessfully}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Order;