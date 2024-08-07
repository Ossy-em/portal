
import React from 'react';
import './ViewRequest.css'

const ViewRequest = () => {
   
    const requests = [
        { name: 'John Doe', department: 'IT', device: 'Laptop', status: 'Pending' },
        { name: 'Jane Smith', department: 'HR', device: 'Printer', status: 'Approved' },
    ];

    return (
        <div className="view-request">
            <h2>View Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Device Requested</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request, index) => (
                        <tr key={index}>
                            <td>{request.name}</td>
                            <td>{request.department}</td>
                            <td>{request.device}</td>
                            <td>{request.status}</td>
                            <td>
                                <button>Approve</button>
                                <button>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewRequest;
