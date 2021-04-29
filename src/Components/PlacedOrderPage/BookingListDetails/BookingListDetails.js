import React from 'react';
import './BookingListDetails.css';

const BookingListDetails = (props) => {
    // console.log(props.userOrder);
    const { serviceName, serviceImage, price, servicePackage1, servicePackage2, servicePackage3, status } = props.userOrder;
    
    return (
        <div className="col-md-4 user-order">
        <h6>{serviceName}</h6>
            <div className="user-order-list d-flex justify-content-between align-items-center">
                <div>
                    <img src={serviceImage} alt=""/>
                    <h5 className="py-2">TK.{price}/=</h5>
                </div>
                <div  className="status" style={{backgroundColor: status ? 'green' : 'none', boxShadow: status ? '2px 2px 8px lightgrey' : 'none'}}>
                    <p>{status}</p>
                </div>
            </div>
            <p><small>{servicePackage1}</small></p>
            <p><small>{servicePackage2}</small></p>
            <p><small>{servicePackage3}</small></p>
        </div>
    );
};

export default BookingListDetails;