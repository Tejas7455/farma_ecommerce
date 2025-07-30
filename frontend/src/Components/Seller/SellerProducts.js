import React from 'react'
import SellerSidebar from './SellerSidebar';
import { NavLink } from 'react-router-dom';

function SellerProducts() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <SellerSidebar />
            </div>
            <div className='col-md-9 col-12 mb-4'>
                <h3><NavLink to='/seller/addproducts/' className='btn btn-secondary mb-2'><i className='fa fa-plus'/> Add Product</NavLink></h3>
                <div className='table'>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Product Title</td>
                            <td>500</td>
                            <td>Published</td>
                            <td>
                                <a href='#' className='btn btn-info ms-2' >View</a>
                                <a href='#' className='btn btn-primary ms-2'>Edit</a>
                                <a href='#' className='btn btn-danger ms-2'>Delete</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SellerProducts;