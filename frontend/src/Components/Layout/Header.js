import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartContext, UserContext } from '../../context';

function Header() {
  const userContext = useContext(UserContext);
  const { cartData } = useContext(CartContext);

  const cartItems = cartData?.length || 0;

  // ✅ Vendor login check
  const vendorLoggedIn = localStorage.getItem('vendor_login') === 'true';

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg shadow-sm fixed-top"
        style={{
          zIndex: 1055,
          background: 'rgba(55, 55, 55, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div className="container">

          {/* Brand */}
          <NavLink
            className="navbar-brand fw-bold"
            to="/"
            style={{ color: '#f5f5f5' }}
          >
            FarmaFriend
          </NavLink>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">

              {/* Home */}
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-light" to="/">
                  Home
                </NavLink>
              </li>

              {/* Categories */}
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-light" to="/categories">
                  Categories
                </NavLink>
              </li>

              {/* My Account */}
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  My Account
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow" style={{ zIndex: 1060 }}>
                  {userContext.login !== 'true' ? (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to="/customer/register">
                          Register
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/customer/login">
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to="/customer/dashboard">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item text-danger" to="/customer/logout">
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>

              {/* ✅ Vendor Panel FIXED */}
              <li className="nav-item dropdown">
                <button
                  className="btn btn-outline-light dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Vendor Panel
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow" style={{ zIndex: 1060 }}>
                  {!vendorLoggedIn ? (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to="/seller/register">
                          Register
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="/seller/login">
                          Login
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink className="dropdown-item" to="/seller/dashboard">
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item text-danger" to="/seller/logout">
                          Logout
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </li>

              {/* Cart */}
              <li className="nav-item">
                <NavLink className="nav-link fw-semibold text-light" to="/checkout">
                  🛒 Cart
                  <span className="badge bg-warning text-dark ms-1">
                    {cartItems}
                  </span>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Space for fixed navbar */}
      <div style={{ height: '70px' }} />
    </>
  );
}

export default Header;
