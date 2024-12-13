import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                <>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/register'>Register</NavLink>
                </>
            </ul>
        </header>
    )
};

export default Header;