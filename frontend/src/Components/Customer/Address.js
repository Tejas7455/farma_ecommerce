import React from 'react'
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

function Address() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-3 col-12 mb-2'>
                <Sidebar />
            </div>
            <div className='col-md-9 col-12 mb-2'>
                
                <div className='row'>
                <NavLink to='/customer/add-address/' className='btn btn-outline-success mb-3 float-end'><i className='fa fa-plus' /> Add Address</NavLink>
                    <div className='col-4 mb-4'>
                        <div className='card'>
                            <div className='card-body text-muted'>
                                <p></p>
                                <h6>
                                <i className='fa fa-check-circle text-success mb-2'/><br/>
                                New Ring road near highway, HQ chowk, Pune</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-muted'>
                            <h6>
                            <span className='badge bg-dark mb-2'>Make Default</span><br/>
                                House.No.5,Railway Station Road, Mumbai</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-muted'>
                                <h6>
                                <span className='badge bg-dark mb-2'>Make Default</span><br/>
                                    Ravi nagar, RN metrol station,Delhi</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 mb-2'>
                        <div className='card'>
                            <div className='card-body text-muted'>
                                <h6>
                                <span className='badge bg-dark mb-2'>Make Default</span><br/>
                                    Satish Nagar, Main Road, Nagpur</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Address;