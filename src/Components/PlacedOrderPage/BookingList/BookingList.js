import React, { useEffect, useState } from 'react';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import './BookingList.css';

const BookingList = (props) => {
    // const { name, image, price, packageInfo1, packageInfo2, packageInfo3 } = props.userOrdered || {};
    const [userOrderList, setUserOrderList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8050/getOrdered')
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setUserOrderList(result)
        })
    }, [])
    return (
            <div className="row user-order-list-area">
                {
                    userOrderList.map(userOrder => <BookingListDetails userOrder={userOrder} key={userOrder._id}></BookingListDetails>)
                }
            </div>
    );
};

export default BookingList;