import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Order.css';

const Order = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" type="text" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input name="email" type="email" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input name="exampleRequired" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <div>
                        <h6>Pay With</h6>
                    </div>
                    <input type="submit" />
                </form> 
            </div>
        </div>
    );
};

export default Order;