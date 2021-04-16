import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [addAdmin, setAddAdmin] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:8050/addAdmin', {
            method: 'POST',
            headers: {'Content-Type' : 'Application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(item => {
            console.log(item);
            setAddAdmin(item)
        })
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
            {
                addAdmin && <p style={{color: 'green', textAlign: 'center', padding: '20px 0px'}}>Admin Added Successfully</p>
            }
        </div>
    );
};

export default MakeAdmin;