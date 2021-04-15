import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';

const AdminSidebar = () => {
    return (
        <div>
            <ul className="admin-tab">
                <Link to="/orderedList">
                    <li>Ordered List</li>
                </Link>
                <Link to="/addService">
                    <li>ADD Service</li>
                </Link>
                <Link to="/makeAdmin">
                    <li>Make Admin</li>
                </Link>
                <Link to="/manageServices">
                    <li>Manage Services</li>
                </Link>
            </ul>
        </div>
    );
};

export default AdminSidebar;