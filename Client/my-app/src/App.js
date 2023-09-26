import './App.css';
import Navbar from './Components/Navbar';
import MainRoutes from './Routes/MainRoutes';
import axios from 'axios';
import {Toaster} from 'react-hot-toast';
import { UserContextProvider } from './Context/userContext';
axios.defaults.baseURL ='http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <UserContextProvider>
    <Navbar/>
    <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
    <MainRoutes/>
    </UserContextProvider>
    </>
  );
}

export default App;
