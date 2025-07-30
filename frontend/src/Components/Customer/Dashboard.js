import React from 'react'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Sidebar from './Sidebar';
function Dashboard() {
  return (   
    
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-2 col-12 mb-5'>
             <Sidebar/>   
            </div>
        <div className='col-md-10 col-12 mb-2'>
            <div className='row ms-4'>
                <div className='col-md-3 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Total Orders</h4>
                            <h4><NavLink to="#">123</NavLink></h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Total Wishlist</h4>
                            <h4><NavLink to="#">123</NavLink></h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Total Address</h4>
                            <h4><NavLink to="#">4</NavLink></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Dashboard;