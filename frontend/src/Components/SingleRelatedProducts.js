import React from 'react';
import logo from '../logo.svg';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function SingleRelatedProducts({ product }) {
  return (
    <div style={{ height: '100%' }}>
      <div
        className="card"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NavLink to={`/product/${product.slug}/${product.id}`}>
          <img
            src={product.image || logo}
            alt={product.title}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
            }}
          />
        </NavLink>

        <div className="card-body">
          <h6 className="card-title">
            <NavLink to={`/product/${product.slug}/${product.id}`}>
              {product.title}
            </NavLink>
          </h6>
          <p className="text-muted mb-0">Rs {product.price}</p>
        </div>

        <div className="card-footer text-center">
          <button
            title="Add to Cart"
            className="btn btn-success btn-sm"
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>

          <button
            title="Add to Wishlist"
            className="btn btn-danger btn-sm ms-2"
          >
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleRelatedProducts;
