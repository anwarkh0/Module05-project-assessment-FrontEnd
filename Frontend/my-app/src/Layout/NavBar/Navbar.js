import { Link, Outlet } from "react-router-dom";
import Styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <>
            <nav className={Styles.nav}>
              
                <ul className={Styles.linksWrapper}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};
export default NavBar