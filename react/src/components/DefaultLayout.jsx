import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { useStateContext } from "../contexts/contextprovider";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";

const DefaultLayout = () => {
    const {user, token} = useStateContext();
    if(!token){
        return <Navigate to="/login"/>
    }
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default DefaultLayout;