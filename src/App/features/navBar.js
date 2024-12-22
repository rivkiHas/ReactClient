import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { userOut } from './user/userSlice'; // שינוי כאן - מיובאת פונקצית התנתקות מהשכבה

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;  
    align-items: center;
    background-color: #fdd6dd;
    padding: 20px 40px;
    position: sticky;
    top: 0;
    z-index: 1000;
`;

const Logo = styled.div`
    img {
        max-height: 50px;
    }
`;

const NavLinks = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const NavLinkItem = styled.li`
    margin-left: 20px;
    &:first-child {
        margin-left: 0;
    }
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
    &:hover {
        color: #ffd6e0;
    }
`;

const NavBar = () => {
    let dispatch = useDispatch();

    let userName = useSelector(state => state.user.currentUser.userName);
    let userRole = useSelector(state => state.user.currentUser.role);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    return (
        <StyledNav>
            <Link to="/about">
                <Logo>
                    <img src="../סמל.png" alt="logo" />
                </Logo>
            </Link>


            <NavLinks>
                <div>
                    {userRole == 'USER' && <h2>    hello   {userName} </h2>}
                    {userRole == 'ADMIN' && <h2>   hello admin {userName} </h2>}

                </div>
                <NavLinkItem>
                    < NavLink to="list/charms">צ'ארמס</NavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <NavLink to="list/necklaces">שרשראות</NavLink>
                </NavLinkItem>
                <NavLinkItem>
                    <NavLink to="list/bracelet">צמידים</NavLink>
                </NavLinkItem>
                <NavLinkItem>
                    {userRole == 'ADMIN' && <  NavLink to="allOrders">כל ההזמנות</NavLink>}
                </NavLinkItem>
                <NavLinkItem>
                    {userRole == 'ADMIN' && <NavLink to="addProduct">הוספת מוצר</NavLink>}
                </NavLinkItem>
                <NavLinkItem>
                    {userRole == 'USER' && <NavLink to="/Buscket"><FaShoppingCart /></NavLink>}
                </NavLinkItem>
                <NavLinkItem style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                        {userRole !== 'USER' && userRole !== 'ADMIN' && (
                            <h5>בכדי להזמין יש לבצע כניסה</h5>
                        )}
                    </div>
                    <div>
                        <NavLink to="/LogIn"><FaUser /></NavLink>
                        <NavLink to="/signUp"><FaUser /></NavLink>
                        {userRole === 'USER' && <NavLink to="/logOut" onClick={() => dispatch(userOut())}><FaUser /></NavLink>} {/* שימוש ב dispatch כדי לשלוח פעולה */}
                        {userRole === 'ADMIN' && <NavLink to="/logOut" onClick={() => dispatch(userOut())}><FaUser /></NavLink>}
                    </div>
                </NavLinkItem>

            </NavLinks>
        </ StyledNav>
    );
}

export default NavBar;
