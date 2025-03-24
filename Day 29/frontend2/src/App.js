import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Product from './pages/product';

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      {/* <Product/> */}
      <Signup/>
    </div>
  );
}

export default App;
