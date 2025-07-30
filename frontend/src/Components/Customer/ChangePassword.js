import React from 'react'
import Sidebar from './Sidebar';

function ChangePassword() {
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
                  <h4 className='card-header'>Change Password</h4>
                <div>
                  <form className='container mt-4 mb-4'>
                    <div className="mb-3">
                    <label for="password" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="password" />
                    </div>
                    <div className="mb-3">
                    <label for="password" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="password" />
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

export default ChangePassword;