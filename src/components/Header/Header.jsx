import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    return (
        <header>
            {isLoggedIn && <div>{user.name}</div>}
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
                {!isLoggedIn && (
                    <>
                     <NavLink to='/login'>Log In</NavLink>
                     <NavLink to='/register'>Register</NavLink>
                    </>
                )}
                {isLoggedIn && <button onClick={() => dispatch(logout())}>Log out</button>}
            </ul>
        </header>
    )
};

export default Header;