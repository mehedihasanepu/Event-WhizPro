import { Outlet } from "react-router-dom";
import "./root.css"
const Root = () => {
    return (
        <div> 
            <Outlet></Outlet>
        </div>
    );
};

export default Root;