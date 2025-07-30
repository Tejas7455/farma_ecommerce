import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../logo.svg';
import SellerSidebar from './SellerSidebar';


function VendorOrder() {
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
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Seeds</p></NavLink>
                            </td>
                            <td>Rs. 100</td>
                            <td><span className='text-success'><i className='fa fa-check-circle'></i> Completed</span></td>
                            <td>
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Change Status
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><a className="dropdown-item" href="#">Approved</a></li>
                                <li><a className="dropdown-item" href="#">Sent</a></li>
                                <li><a className="dropdown-item" href="#">Completed</a></li>
                                </ul>
                            </div>
                                </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Pesticides</p></NavLink>
                            </td>
                            <td>Rs. 500</td>
                            <td><span className='text-success'><i className='fa fa-check-circle'></i> Completed</span></td>
                            <td>
                            <div className="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Change Status
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <li><a className="dropdown-item" href="#">Approved</a></li>
                                <li><a className="dropdown-item" href="#">Sent</a></li>
                                <li><a className="dropdown-item" href="#">Completed</a></li>
                                </ul>
                            </div>
                                </td>
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



export default VendorOrder;