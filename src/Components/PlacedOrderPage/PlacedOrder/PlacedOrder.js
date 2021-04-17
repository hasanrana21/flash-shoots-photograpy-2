import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';
import ReviewSend from '../ReviewSend/ReviewSend';
import './PlacedOrder.css';
import BookingList from '../BookingList/BookingList';


const PlacedOrder = () => {
    const {id} = useParams();
    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8050/getServiceData')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setServiceData(data);
        })
    }, [])
    const userOrdered = serviceData.find(ordered => ordered._id === id);
    console.log(userOrdered);
    return (
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 order-placed-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Booking</button>

                <button className="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Booking List</button>

                <button className="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Reviews</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <Booking userOrdered={userOrdered}></Booking> </div>

                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <BookingList userOrdered={userOrdered}></BookingList> </div>

                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"> <ReviewSend></ReviewSend> </div>
            </div>
        </div>
    );
};

export default PlacedOrder;