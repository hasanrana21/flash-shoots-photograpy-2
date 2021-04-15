import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';


const Sidebar = () => {
    return (
            <div className="side-bar">
                <ul>
                    <Link to="/order">
                        <li>Order</li>
                    </Link>
                    <Link to="/orderList">
                        <li>Order List</li>
                    </Link>
                    <Link to="/review">
                        <li>Review</li>
                    </Link>
                </ul>
            </div>
    );
};

export default Sidebar;