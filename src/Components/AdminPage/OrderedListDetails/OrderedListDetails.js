import React from 'react';
import './OrderedListDetails.css';

const OrderedListDetails = ({allOrder}) => {

    const handleChangeStatus = event => {
        console.log(event.target.value)
        const statusData = event.target.value;
        localStorage.setItem('setStatus', statusData);
        const updateStatus ={
            status: event.target.value,
        }
        console.log(updateStatus)

        fetch('http://localhost:8050/updateOrder', {
            method: 'POST',
            headers: {'Content-Type' : 'Application/json'},
            body: JSON.stringify({updateStatus: updateStatus, updateID: allOrder._id})
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }
    return (
        <div className="row all-ordered-list">
            <div className="col-md-2"><p> <small> {allOrder.name} </small> </p></div>
            <div className="col-md-4"><p> <small>{allOrder.email}</small> </p></div>
            <div className="col-md-2"><p> <small>{allOrder.serviceName}</small> </p></div>
            <div className="col-md-2"><p> <small>Credit Card</small> </p></div>
            <div className="col-md-2">
                <form>
                    <select onChange={handleChangeStatus} className="form-select mt-2" id="validationCustom04">
                        <option value="Select">Select Status</option>
                        <option value="Pending" style={{color: 'red'}}>Pending</option>
                        <option value="Ongoing" style={{color: 'goldenrod'}}>OnGoing</option>
                        <option value="Done" style={{color: 'green'}}>Done</option>
                    </select>
                </form>
            </div>
        </div>
    );
};

export default OrderedListDetails;