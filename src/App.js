import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Login2 from './Components/Login/Login2';
import Payment from './Components/Payment/Payment';
import Login3 from './Components/Login/Login3';
import Payment2 from './Components/Payment/Payment2';

function App() {
  return (
    <div className="App">
      <Login />
      <Login2 />
      <Payment />
      <Login3 />
      <Payment2 />
    </div>
  );
}

export default App;
