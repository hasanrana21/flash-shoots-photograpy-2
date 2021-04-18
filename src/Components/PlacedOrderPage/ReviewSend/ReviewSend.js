import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { UserContext } from '../../../App';
import './ReviewSend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinHearts } from '@fortawesome/free-solid-svg-icons';

const ReviewSend = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const reviewCard = {
            name: data.name,
            review: data.review,
            image: review,
        }
        console.log(reviewCard);

        fetch('https://peaceful-mesa-78217.herokuapp.com/addReview', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewCard)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    };


    const handleReviewImage = event => {
        console.log(event.target.files[0])
        const reviewImage = new FormData();
        reviewImage.set('key', 'd743345ed836835ea8ba69731659d88a')
        reviewImage.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', reviewImage)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setReview(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
          event.target.value = '';
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="review-form">
                    <input name="name" type="text" placeholder="Your Name" ref={register} />
                    
                    <input name="email" type="email" placeholder="Your Email" ref={register} />

                    <input name="image" type="file" onChange={handleReviewImage} ref={register} />
                    
                    <textarea name="review" placeholder="Your FeedBack" id="" cols="30" rows="10" ref={register}></textarea>
                </div>
                
                <div className="text-center">
                    <button type="submit" className="btn primary-button"> <FontAwesomeIcon icon={faGrinHearts}/> Send Love</button>
                </div>
            </form> 
        </div>
    );
};

export default ReviewSend;