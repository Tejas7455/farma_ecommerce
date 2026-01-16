import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function SingleProduct({ product }) {
  return (
    <div className="col-12 col-md-3 col-sm-4 mb-4">
      <div className="card">
        <NavLink to={`/product/${product.slug}/${product.id}/`}>
          <img
            src={product.image || logo}
            className="card-img-top"
            alt={product.title}
            style={{ height: '200px', objectFit: 'cover', width: '100%' }}
          />
        </NavLink>
        <div className="card-body">
          <h4 className="card-title">
            <NavLink to={`/product/${product.slug}/${product.id}`}>
              {product.title}
            </NavLink>
          </h4>
          <h5 className="card-title text-muted">Price : Rs {product.price}</h5>
        </div>
        <div className="card-footer">
          <button title="Add to Cart" className="btn btn-success btn-sm" aria-label="Add to Cart">
            <i className="fa-solid fa-cart-plus"></i>
          </button>
          <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-2" aria-label="Add to Wishlist">
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}


export default SingleProduct;