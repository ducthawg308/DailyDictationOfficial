import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <>
            <div>Default layout</div>
            <Outlet/>
        </>
    );
}

export default DefaultLayout;