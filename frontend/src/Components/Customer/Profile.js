import React from 'react'
import Sidebar from './Sidebar';

function Profile() {
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
                    <h4 className='card-header'>Update Profile</h4>
                  <div>
                    <form className='container mt-4 mb-4'>
                      <div className="mb-3">
                      <label for="firstname" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstname" />
                      </div>
                      <div className="mb-3">
                      <label for="lastname" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastname" />
                      </div>
                      <div className="mb-3">
                      <label for="username" className="form-label">Username</label>
                      <input type="text" className="form-control" id="username" />
                      </div>
                      <div className="mb-3">
                      <label for="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" />
                      </div>
                      <div className="mb-3">
                      <label for="img" className="form-label">Image</label>
                      <input type="file" className="form-control" id="img"/>
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

export default Profile;