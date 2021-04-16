import React from 'react';
import OrderedListDetails from '../OrderedListDetails/OrderedListDetails';
import './OrderedList.css';

const OrderedList = ({allOrderedList}) => {
    return (
        <div className="admin-ordered-list">
            <div className="row admin-ordered-title">
                <div className="col-md-2"><h5>Name</h5></div>
                <div className="col-md-4"><h5>Email</h5></div>
                <div className="col-md-3"><h5>Service</h5></div>
                <div className="col-md-2"><h5>Pay With</h5></div>
                <div className="col-md-1"><h5>Status</h5></div>
            </div>
            {
                allOrderedList.map(allOrder => <OrderedListDetails allOrder={allOrder}></OrderedListDetails>)
            }
        </div>
    );
};

export default OrderedList;