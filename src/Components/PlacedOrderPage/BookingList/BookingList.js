import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListDetails from '../BookingListDetails/BookingListDetails';
import './BookingList.css';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userOrderList, setUserOrderList] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-mesa-78217.herokuapp.com/getOrdered')
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setUserOrderList(result);
        })
    }, [])
    const userItem = userOrderList.filter(userOrder => userOrder.email === loggedInUser.email);
    console.log(userItem);
    
    return (
        <>
            <div className="row user-order-list-area">
                {
                    userItem.map(userOrder => <BookingListDetails userOrder={userOrder} key={userOrder._id}></BookingListDetails>)
                }
            </div>
        </>
    );
};

export default BookingList;