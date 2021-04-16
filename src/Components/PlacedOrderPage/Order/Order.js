import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import './Order.css';

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="p-5 order-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" type="text" defaultValue={loggedInUser.displayName} placeholder="Your Name" ref={register} />
                
                <input name="email" type="email" defaultValue={loggedInUser.email} placeholder="Your Email" ref={register} />
                
                <input name="price" type="text" defaultValue="" placeholder="Order Price" ref={register} />
                
                
                <div>
                    <h6>Pay With</h6>
                </div>
                <input type="submit" />
            </form> 
        </div>
    );
};

export default Order;