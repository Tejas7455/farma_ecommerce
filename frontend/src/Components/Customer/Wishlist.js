import React from 'react'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import logo from '../../logo.svg';

function Wishlist() {
  return (
    <div className='container mt-5'>
    <div className='row'>
        <div className='col-md-2 col-12 mb-5'>
         <Sidebar/>   
        </div>
    <div className='col-md-10 col-12 mb-2 text-center'>
        <div className='row ms-4'>
            <div className='table-responsive'>
                <table className='table table-bordered '>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Action</th>
                        
                    </tr>
                    </thead>
                    <tbody >
                    <tr>
                        <td>1</td>
                        <td>
                            <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                            <NavLink><p>Seeds</p></NavLink>
                        </td>
                        <td>Rs. 100</td>
                        <td><button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                            <NavLink><p>Pesticides</p></NavLink>
                        </td>
                        <td>Rs. 150</td>
                        <td><button className='btn btn-danger '><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                            <NavLink><p>Fertilizers</p></NavLink>
                        </td>
                        <td>Rs. 250</td>
                        <td><button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                            <NavLink><p>Organic</p></NavLink>
                        </td>
                        <td>Rs. 300</td>
                        <td><button className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
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

export default Wishlist;