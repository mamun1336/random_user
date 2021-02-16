import React from 'react';
import "./User.css"
import fakeData from "../fakeData"
import { Button } from 'react-bootstrap';


const User = () => {
    console.log(fakeData);


    return (
        <div>
            {
                fakeData.map(user => 
                <div className = "userCard">
                    <img src={user.photo} alt="user"/>
                    <h2>User Name: {user.first_name} {user.last_name}</h2>
                    <h3>Contact Info: {user.email}</h3>
                    <h2>Salary: ${user.annual_salary}</h2>
                    <Button variant="primary">Add User</Button>
                </div>)
            }
            
        </div>
    );
};

export default User;