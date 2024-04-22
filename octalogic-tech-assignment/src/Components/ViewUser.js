import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Styles/viewuser.css"

function ViewUser(){
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = (id) => {
        // axios.delete(`https://sukanta-octalogic-backen.onrender.com/users/${id}`)
        axios.delete(`http://localhost:8080/users/delete/${id}`)
            .then(() => {
                fetchData();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const fetchData = () => {
        // axios.get("https://sukanta-octalogic-backen.onrender.com/users")     
        axios.get("http://localhost:8080/users")  
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
   
    return (
        <div>
            <h1 className='user-booking'>USER BOOKINGS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Wheels</th>
                        <th>Vehicle Type</th>
                        <th>Vehicle Model</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.firstName}</td>
                            <td>{booking.lastName}</td>
                            <td>{booking.wheels}</td>
                            <td>{booking.typeOfVehicle}</td>
                            <td>{booking.model}</td>
                            <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                            <td>{new Date(booking.endDate).toLocaleDateString()}</td>
                            <td>
                                <button onClick={() => handleDelete(booking.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">
                <p style={{ color: "green" }}>Back To Front Page</p>
            </Link>
        </div>
    );
}

export default ViewUser;
