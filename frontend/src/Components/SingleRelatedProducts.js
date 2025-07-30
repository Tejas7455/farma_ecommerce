import React from 'react'
import logo from '../logo.svg'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function SingleRelatedProducts(props) {
  return (
    
      <div className="col-4 offset-4 mb-4">
      <div className="card">

      <NavLink to={`/product/${props.product.slug}/${props.product.id}`}>
        <img src={props.product.image} className="card-img-top" alt="..." />
      </NavLink>
      <div className="card-body">
          <h4 className="card-title"><NavLink to={`/product/${props.product.slug}/${props.product.id}`}>{props.product.title}</NavLink></h4>
          <h5 className="card-title text-muted">Price : Rs {props.product.price}</h5>
        </div>
           <div className='card-footer'>
         <button title="Add to Cart" className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
         <button title="Add to Wishlist" className='btn btn-danger btn-sm ms-2'><i className="fa fa-heart"></i></button>
         
      
       </div>
       </div>    
       </div>
  )
}

export default SingleRelatedProducts;