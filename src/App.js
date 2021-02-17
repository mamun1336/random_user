import './App.css';
import User from './User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]);
  const [totalSalary, setTotalSalary] = useState(0);
  function handleAddUser(user){
    let newUserData = [...userData,user];
    setUserData(newUserData);
    const totalSalary = newUserData.reduce((sum, newUserData) => sum + newUserData.annual_salary,0)
    setTotalSalary(totalSalary);
}
console.log(totalSalary);

  return (
    <div className="App">
      <Header></Header>
      <div className = "userInfo">
        <div className = "userDetails container">
          <User handleAddUser = {handleAddUser}></User>
        </div>
        <div className = "cardDetails">
          <h2>user Added: {userData.length}</h2>
          <h4 style={{color: "red"}} >Total salary: {totalSalary}</h4>
        </div>
      </div>
      
    </div>
  );
}

export default App;
