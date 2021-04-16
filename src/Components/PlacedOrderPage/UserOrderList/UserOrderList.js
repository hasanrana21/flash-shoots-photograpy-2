import React, { useEffect, useState } from 'react';
import UserOrderListDetails from '../UserOrderListDetails/UserOrderListDetails';
import './UserOrderList.css';

const UserOrderList = (props) => {
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
                    userOrderList.map(userOrder => <UserOrderListDetails userOrder={userOrder}></UserOrderListDetails>)
                }
            </div>
    );
};

export default UserOrderList;