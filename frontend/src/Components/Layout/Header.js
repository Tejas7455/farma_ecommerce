import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { useContext } from 'react';
import { CartContext, UserContext } from '../../context';

function Header() {
  const userContext = useContext(UserContext);
  const {cartData,setcartData} = useContext(CartContext);
  if(cartData == null){
    var cartItems=0;
  }else{
    var cartItems=cartData.length;
  }

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
            <NavLink className="navbar-brand" to="/">FarmaFriend</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/categories">Categories</NavLink>
                </li>
                <div className="dropdown">
                 <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    My Account
                  </button> 
                
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {userContext.login != 'true' &&
                <>
                <li><NavLink className="dropdown-item" to="/customer/register">Register</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer/login">Login</NavLink></li>
                </>
                }
                {userContext.login == 'true' &&
                  <>
                  <li><NavLink className="dropdown-item" to="/customer/dashboard">Dashboard</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/customer/logout">Logout</NavLink></li>
                </>
                }
                </ul>
                </div>
                <div className="dropdown">
                 <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Vendor panel
                  </button> 
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><NavLink className="dropdown-item" to="/seller/register">Register</NavLink></li>
                <li><NavLink className="dropdown-item" to="/seller/login">Login</NavLink></li>
                <li><hr className="dropdown-divide" /></li>
                <li><NavLink className="dropdown-item" to="/seller/dashboard">Dashboard</NavLink></li>
                <li><NavLink className="dropdown-item" to="/seller/logout">Logout</NavLink></li>
                </ul>
                </div>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/checkout">New Orders (4)</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/checkout">My Cart ({cartItems})</NavLink>
                </li>
            </ul>
            

            </div>
        </div>
        </nav>
    </>
  )
}

export default Header;