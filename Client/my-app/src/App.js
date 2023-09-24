import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import axios from 'axios';
axios.defaults.baseURL ='http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Navbar/>
    <MainRoutes/>
    </>
  );
}

export default App;
