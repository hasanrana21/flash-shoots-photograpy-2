import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddService.css';

const AddService = () => {
    const [uploadImage, setUploadImage] = useState(null);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        const serviceCard = {
            name: data.name,
            price: data.price,
            packageInfo1: data.packageInfo1,
            packageInfo2: data.packageInfo2,
            packageInfo3: data.packageInfo3,
            packageInfo4: data.packageInfo4,
            packageInfo5: data.packageInfo5,
            image: uploadImage,
        }
        
        fetch('http://localhost:8050/addServiceData', {
            method: 'POST',
            headers: {'Content-Type' : 'Application/json'},
            body: JSON.stringify(serviceCard)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    const uploadServiceImage = event => {
        const serviceImageData = new FormData();
        serviceImageData.set('key', 'd743345ed836835ea8ba69731659d88a');
        serviceImageData.append('image', event.target.files[0]);
        console.log(serviceImageData);

        axios.post('https://api.imgbb.com/1/upload', serviceImageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setUploadImage(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleAddServiceData = event => {
        // console.log(event.target.value)
    }
    return (
        <div className="add-service">
            <h4>Add Services</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="add-service-form">
                        <label htmlFor="name">Service Name</label>
                        <input name="name" onBlur={handleAddServiceData} type="text" ref={register({ required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <label htmlFor="price">Service Price</label>
                        <input name="price" onBlur={handleAddServiceData} type="text" ref={register({ required: true })} />
                        {errors.price && <span>This field is required</span>}
                        
                        <label htmlFor="packageInfo1">Package Info</label>
                        <input name="packageInfo1" onBlur={handleAddServiceData} ref={register}/>

                        <label htmlFor="packageInfo2">Package Info</label>
                        <input name="packageInfo2" onBlur={handleAddServiceData} ref={register}/>

                        <label htmlFor="packageInfo3">Package Info</label>
                        <input name="packageInfo3" onBlur={handleAddServiceData} ref={register}/>

                        <label htmlFor="packageInfo4">Package Info</label>
                        <input name="packageInfo4" onBlur={handleAddServiceData} ref={register}/>

                        <label htmlFor="packageInfo5">Package Info</label>
                        <input name="packageInfo5" onBlur={handleAddServiceData} ref={register}/>
                        
                        <label htmlFor="image">Upload Image</label>
                        <input name="image" type="file" onChange={uploadServiceImage} ref={register({ required: true })} />
                        {errors.image && <span>This field is required</span>}
                    </div>
                    
                    
                    <input type="submit" />
                </form> 
        </div>
    );
};

export default AddService;