import React from 'react';
import { Link } from 'react-router-dom';
import Order from '../Order/Order';
import ReviewSend from '../ReviewSend/ReviewSend';
import UserOrderList from '../UserOrderList/UserOrderList';
import './PlacedOrder.css';


const PlacedOrder = () => {
    return (
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 order-placed-tab" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Booking</button>

                <button className="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Booking List</button>

                <button className="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Reviews</button>
            </div>

            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <Order></Order> </div>

                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <UserOrderList></UserOrderList> </div>

                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"> <ReviewSend></ReviewSend> </div>
            </div>
        </div>
    );
};

export default PlacedOrder;