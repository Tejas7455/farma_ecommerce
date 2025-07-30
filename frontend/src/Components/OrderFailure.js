import React from 'react'
import { NavLink } from 'react-router-dom';

function OrderFailure() {
  return (
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-8 offset-2'>
            <div className='card'>
              <div className='card-body text-center'>
                <p><i className='fa fa-times-circle text-danger fa-3x'></i></p>
                <h1 className='text-danger'>Your Order is Failed...Something went wrong</h1>
                <p className='mt-5'>
                  <NavLink to="/" className='btn btn-primary '>Home</NavLink></p>
                <p><NavLink to="/customer/dashboard" className='btn btn-secondary'>Dashboard</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default OrderFailure;