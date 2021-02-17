import React from 'react';
import "./User.css"
import fakeData from "../fakeData"
import { Button } from 'react-bootstrap';


const User = (props) => {

    

    return (
        <div>
            {
                fakeData.map(user => 
                <div className = "userCard">
                    <img src={user.photo} alt="user"/>
                    <h2>User Name: {user.first_name} {user.last_name}</h2>
                    <h3>Contact Info: </h3>
                    <h3>Email: {user.email}</h3>
                    <h3>Phone: {user.phone}</h3>
                    <h2>Salary: ${user.annual_salary}</h2>
                    <Button variant="primary" onClick = {() => props.handleAddUser(user)}>Add User</Button>
                </div>)
            }
            
        </div>
    );
};

export default User;