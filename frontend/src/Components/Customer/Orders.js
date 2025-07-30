import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Sidebar';
import logo from '../../logo.svg';


function Orders() {

  const baseUrl = 'http://127.0.0.1:8000/api';
  const customerId =localStorage.getItem('customer_id');

  useEffect(() => {
        fetchData(baseUrl+'/customer/'+customerId+'/orderitems');
      },[]);
  
  async function fetchData(baseurl){
    fetch(baseurl)
    .then((response) => response.json())
    .then((data)=>{
      console.log('data',data);
    });
  }

  return (   
    
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-2 col-12 mb-5'>
             <Sidebar/>   
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
                            <td><button className='btn btn-primary'>Download</button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Pesticides</p></NavLink>
                            </td>
                            <td>Rs. 150</td>
                            <td><span className='text-success'><i className='fa fa-check-circle'></i> Completed</span></td>
                            <td><button className='btn btn-primary'>Download</button></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Fertilizers</p></NavLink>
                            </td>
                            <td>Rs. 250</td>
                            <td><span className='text-warning'><i className='fa fa-spin fa-spinner'></i> Processing..</span></td>
                            <td><button className='btn btn-primary'>Download</button></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>
                                <NavLink><img src={logo} className="img-thumbnail" width="80" alt="..." /></NavLink>
                                <NavLink><p>Organic</p></NavLink>
                            </td>
                            <td>Rs. 300</td>
                            <td><span className='text-success'><i className='fa fa-check-circle'></i> Completed</span></td>
                            <td><button className='btn btn-primary'>Download</button></td>
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

export default Orders;