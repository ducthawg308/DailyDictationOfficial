import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <>
        <div>Guest layout</div>
        <Outlet/> 
        </>  
    );
}

export default GuestLayout;