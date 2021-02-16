import './App.css';
import User from './User/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className = "userInfo">
        <div className = "userDetails container">
          <User></User>
        </div>
        <div className = "cardDetails">
          <h2>user Added</h2>
        </div>
      </div>
      
    </div>
  );
}

export default App;
