import React, { useEffect, useState } from 'react';
import OrderedListDetails from '../OrderedListDetails/OrderedListDetails';
import './OrderedList.css';

const OrderedList = () => {
    const [allOrderedList, setAllOrderedList] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-mesa-78217.herokuapp.com/getOrdered')
        .then(res => res.json())
        .then(result => setAllOrderedList(result))
    }, [])
    return (
        <div className="admin-ordered-list">
            <div className="row admin-ordered-title">
                <div className="col-md-2"><h5>Name</h5></div>
                <div className="col-md-4"><h5>Email</h5></div>
                <div className="col-md-2"><h5>Service</h5></div>
                <div className="col-md-2"><h5>Pay With</h5></div>
                <div className="col-md-2"><h5>Status</h5></div>
            </div>
            {
                allOrderedList.map(allOrder => <OrderedListDetails allOrder={allOrder} key={allOrder._id}></OrderedListDetails>)
            }
        </div>
    );
};

export default OrderedList;