import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = (props) => (
    <ul className='nav'>
        <li>
            <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
            <NavLink to="/mypage">My Page</NavLink>
        </li>
    </ul>
);

export default Nav;