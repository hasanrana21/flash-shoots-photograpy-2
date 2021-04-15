import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="my-5">
            <h2 className="text-center py-5">Stay in Touch</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div  className="row contact-form-area justify-content-center px-5">
                    <div className="col-md-6 contact-form">
                        <input name="name" type="text" placeholder="Your Name" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input name="phone" type="text" placeholder="Your Phone" ref={register({ required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <div className="col-md-6 contact-form">
                        <input name="email" type="email" placeholder="Your Email Address" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                        <input name="subject" type="text" placeholder="Your Subject" ref={register({ required: true })} />
                        {errors.subject && <span>This field is required</span>}
                    </div>

                    <div>
                        <textarea name="message" type="text"  placeholder="Your Message" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>

                
                    
                <div className="text-center pt-3">
                    <button className="btn primary-button" type="submit">SEND</button>
                </div>
                </form> 
        </div>
    );
};

export default Contact;