import React from 'react';
import './OrderedListDetails.css';

const OrderedListDetails = ({allOrder}) => {
    return (
        <div className="row all-ordered-list">
            <div className="col-md-2"><p> {allOrder.name} </p></div>
            <div className="col-md-4"><p> {allOrder.email} </p></div>
            <div className="col-md-3"><p> {allOrder.serviceName} </p></div>
            <div className="col-md-2"><p> Credit Card </p></div>
            <div className="col-md-1"><p> Pending </p></div>
        </div>
    );
};

export default OrderedListDetails;