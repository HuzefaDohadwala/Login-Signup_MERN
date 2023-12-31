import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { Login } from "../Components/Login";
import { Regi } from "../Components/Regi";
import { Dashboard } from "../Components/Dashboard";
function MainRoutes() {
    return ( 
        <>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/regi" element={<Regi/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/" element={<Home/>}/>
        </Routes>
        </>
    );
}

export default MainRoutes;