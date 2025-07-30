import React from 'react'
import SellerSidebar from './SellerSidebar';
import { NavLink } from 'react-router-dom';

function Reports() {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-2 col-12 mb-5'>
            <SellerSidebar />
            </div>
        <div className='col-md-10 col-12 mb-2'>
            <div className='row ms-4'>
                <div className='col-md-4 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Daily Reports</h4>
                            <h4><NavLink to="#" className='btn btn-info mt-2'>view</NavLink></h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Monthly Report</h4>
                            <h4><NavLink to="#" className='btn btn-info mt-2'>view</NavLink></h4>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mb-2 '>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <h4>Yearly Reports</h4>
                            <h4><NavLink to="#" className='btn btn-info mt-2'>view</NavLink></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Reports;