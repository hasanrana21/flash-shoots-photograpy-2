import React from 'react';
import './UserOrderListDetails.css';

const UserOrderListDetails = (props) => {
    console.log(props.userOrder);
    const { serviceName, serviceImage, price, servicePackage1, servicePackage2, servicePackage3 } = props.userOrder;
    return (
        <div className="col-md-4 user-order">
            <div className="user-order-list d-flex justify-content-between">
                <div>
                    <h6>{serviceName}</h6>
                    <img src={serviceImage} alt=""/>
                    <h5 className="py-2">TK.{price}/=</h5>
                </div>
                <div className="status">
                    <p>Pending</p>
                </div>
            </div>
            <p><small>{servicePackage1}</small></p>
            <p><small>{servicePackage2}</small></p>
            <p><small>{servicePackage3}</small></p>
        </div>
    );
};

export default UserOrderListDetails;