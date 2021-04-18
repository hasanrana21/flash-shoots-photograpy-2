import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingList from '../../PlacedOrderPage/BookingList/BookingList';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageServices from '../ManageServices/ManageServices';
import OrderedList from '../OrderedList/OrderedList';
import './Admin.css';

const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allOrderedList, setAllOrderedList] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://peaceful-mesa-78217.herokuapp.com/getOrdered')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAllOrderedList(data);
        })
    }, [])

    useEffect(() => {
        fetch('https://peaceful-mesa-78217.herokuapp.com/Admin', {
            method: 'POST',
            headers: {'Content-Type' : 'Application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            setIsAdmin(result);
        })
    }, [loggedInUser])
    
    return (
        <>
        { isAdmin ?
            <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 admin-sidebar" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link active text-start" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Ordered List</button>

                <button className="nav-link text-start" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Add Service</button>

                <button className="nav-link text-start" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Make Admin</button>

                <button className="nav-link text-start" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Manage Services</button>
            </div>

            <div className="tab-content admin-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"> <OrderedList></OrderedList> </div>

                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <AddService></AddService> </div>

                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab"> <MakeAdmin></MakeAdmin> </div>

                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab"> <ManageServices></ManageServices> </div>
            </div>
        </div>
        : 
          <div className="admin-page-user">
              <h3>All Your Booking</h3>
              <BookingList></BookingList>
          </div>
          }
        </>
    );
};

export default Admin;