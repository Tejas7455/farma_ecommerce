import React from 'react'
import Sidebar from './Sidebar';

function AddAddress() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-2 col-12 mb-5'>
          <Sidebar/>   
        </div>
        <div className='col-md-10 col-12 mb-5'>
          <div className='row'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12 col-10 ms-5'>
                  <div className="card">
                    <h4 className='card-header'>Add Address</h4>
                  <div>
                    <form className='container mt-4 mb-4'>
                      <div className="mb-3">
                      <label for="address" className="form-label">New Address</label>
                      <textarea type="text" className="form-control" id="address" />
                      </div>
                     
                      

                      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                    </form>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default AddAddress;