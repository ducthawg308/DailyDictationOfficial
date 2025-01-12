import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { useStateContext } from "../contexts/contextprovider";

const GuestLayout = () => {
    const {token} = useStateContext();
    if(token){
        return <Navigate to="/"/>
    }
    return (
        <>
            <div>Guest layout</div>
            <Outlet/> 
        </>  
    );
}

export default GuestLayout;