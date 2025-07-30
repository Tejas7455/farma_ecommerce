import React from 'react'
import SellerSidebar from './SellerSidebar';

function Customers() {
  return (
            <div className='container mt-5'>
            <div className='row'>
            <div className='col-md-2 col-12 mb-5'>
            <SellerSidebar/>   
            </div>
            <div className='col-md-10 col-12 mb-2'>
            <div className='row ms-4'>
                <div className='table-responsive'>
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Action</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                Sachin Deo
                            </td>
                            <td>sachin@gmail.com</td>
                            <td>9876543210</td>
                            <td><button className='btn btn-primary btn-sm'>Orders</button>
                            <button className='btn btn-danger btn-sm ms-2'>Remove from List</button></td>
                            
                           
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                Nimesh Rao
                            </td>
                            <td>nimesh@gmail.com</td>
                            <td>7418529630</td>
                            <td>
                                <button className='btn btn-primary btn-sm'>Orders</button>
                                <button className='btn btn-danger btn-sm ms-2'>Remove from List</button></td>
                           
                        </tr>
                      
                        
                    </tbody>
                    </table>
                </div>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Customers;