import React, { useState } from 'react';
import './UserOrderList.css';

const UserOrderList = (props) => {
    // const { name, image, price, packageInfo1, packageInfo2, packageInfo3 } = props.userOrdered || {};
    const [userOrderList, setUserOrderList] = useState([]);
    return (
            <div className="user-order-list">
                {/* <h5>{name}</h5>
                <img src={image} alt=""/>
                <h6>{price}</h6>
                <p>{packageInfo1}</p>
                <p>{packageInfo2}</p>
                <p>{packageInfo3}</p> */}
            </div>
    );
};

export default UserOrderList;