import React from 'react';
import './AdminHeader.css'
import images from '../SCLogo.png'

const AdminHeader = () => {
    return (
        <header className="admin-header">
            <div className="logo"> 
                 <img src={images} alt='image' style={{ width: '120px', height: '100px' }}/>
                 </div>
            <nav>
                <ul>
                    <li><a href="/add-user">Add User</a></li>
                    <li><a href="/view-request">View Request</a></li>
                    <li><a href="/status">Status</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default AdminHeader;
