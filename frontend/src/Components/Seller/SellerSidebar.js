import React from 'react'
import { NavLink } from 'react-router-dom';

function SellerSidebar() {
  return (
    <div>
    <div className="list-group">
        <NavLink to="/seller/dashboard/" className="list-group-item list-group-item-action active">Dashboard</NavLink>
        <NavLink to="/seller/products/" className="list-group-item list-group-item-action">Products</NavLink>
        <NavLink to="/seller/addproducts/" className="list-group-item list-group-item-action">Add Products</NavLink>
        <NavLink to="/seller/orders/" className="list-group-item list-group-item-action">Orders</NavLink>
        <NavLink to="/seller/customers/" className="list-group-item list-group-item-action">Customers</NavLink>
        <NavLink to="/seller/reports/" className="list-group-item list-group-item-action">Reports</NavLink>
        <NavLink to="/seller/profile/" className="list-group-item list-group-item-action">Profile</NavLink>
        <NavLink to="/seller/change-password/" className="list-group-item list-group-item-action">Change Password</NavLink>
        <NavLink to="/seller/logout/" className="list-group-item list-group-item-action text-danger">Logout</NavLink>
    </div>
    </div>
  )
}

export default SellerSidebar;