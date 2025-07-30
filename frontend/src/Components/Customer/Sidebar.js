import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
    <div className="list-group">
        <NavLink to="/customer/dashboard/" className="list-group-item list-group-item-action active">Dashboard</NavLink>
        <NavLink to="/customer/orders/" className="list-group-item list-group-item-action">Orders</NavLink>
        <NavLink to="/customer/wishlist/" className="list-group-item list-group-item-action">Wishlist</NavLink>
        <NavLink to="/customer/profile/" className="list-group-item list-group-item-action">Profile</NavLink>
        <NavLink to="/customer/change-password/" className="list-group-item list-group-item-action">Change Password</NavLink>
        <NavLink to="/customer/address/" className="list-group-item list-group-item-action">Addresses</NavLink>
        <NavLink to="/customer/logout/" className="list-group-item list-group-item-action text-danger">Logout</NavLink>
    </div>
    </div>
  )
}

export default Sidebar;