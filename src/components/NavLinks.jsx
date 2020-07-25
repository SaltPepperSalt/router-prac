import React from 'react';
import { NavLink } from 'react-router-dom';
import queryString from 'query-string';

const activeStyle = { color: 'red', fontSize: 25 };

export default function NavLinks() {
  return (
    <ul>
      <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
      <li><NavLink exact to="/profile" activeStyle={activeStyle}>Profile</NavLink></li>
      <li><NavLink to="/profile/12" activeStyle={activeStyle}>Profile/12</NavLink></li>
      <li>
        <NavLink
          to="/about"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') return false;
            const query = queryString.parse(location.search);
            const { name } = query;
            return !name;
          }}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about?name=Jin"
          activeStyle={activeStyle}
          isActive={(match, location) => {
            if (location.pathname !== '/about') return false;
            const query = queryString.parse(location.search);
            const { name } = query;
            return name;
          }}
        >
          About?name=Jin
        </NavLink>
      </li>
      <li><NavLink to="/login" activeStyle={activeStyle}>Login</NavLink></li>
    </ul>
  );
}