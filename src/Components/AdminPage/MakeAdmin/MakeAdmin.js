import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('')
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="admin-form">
                        <input name="name" type="text" placeholder="Your Name" ref={register} />
                        
                        <input name="email" type="email" placeholder="Your Email" ref={register} />
                    </div>
                    
                    <div className="mt-3 text-center">
                        <button type="submit" className="btn primary-button">ADD ADMIN</button>
                    </div>
            </form>
        </div>
    );
};

export default MakeAdmin;