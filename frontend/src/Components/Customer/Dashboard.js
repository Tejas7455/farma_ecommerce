import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

function Dashboard() {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('addresses')) || [];
    setAddresses(saved);

    const selected = saved.find(a => a.isSelected === true);
    setSelectedAddress(selected || null);
  }, []);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-2 col-12 mb-5'>
          <Sidebar />
        </div>

        <div className='col-md-10 col-12 mb-2'>
          <div className='row ms-4'>

            {/* Orders */}
            <div className='col-md-3 mb-2'>
              <div className='card'>
                <div className='card-body text-center'>
                  <h4>Total Orders</h4>
                  <h4><NavLink to="#">123</NavLink></h4>
                </div>
              </div>
            </div>

            {/* Wishlist */}
            <div className='col-md-3 mb-2'>
              <div className='card'>
                <div className='card-body text-center'>
                  <h4>Total Wishlist</h4>
                  <h4><NavLink to="#">123</NavLink></h4>
                </div>
              </div>
            </div>

            {/* Address Count */}
            <div className='col-md-3 mb-2'>
              <div className='card'>
                <div className='card-body text-center'>
                  <h4>Total Address</h4>
                  <h4>
                    <NavLink to="/customer/address/">
                      {addresses.length}
                    </NavLink>
                  </h4>
                </div>
              </div>
            </div>

          </div>

          {/* Selected Address Section */}
          <div className="row ms-4 mt-4">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header fw-bold">
                  Selected Address
                </div>

                <div className="card-body">
                  {selectedAddress ? (
                    <>
                      <p className="fw-bold">{selectedAddress.address}</p>
                      {selectedAddress.road && <p>{selectedAddress.road}</p>}
                      {selectedAddress.landmark && (
                        <p>Landmark: {selectedAddress.landmark}</p>
                      )}
                      <p>
                        {selectedAddress.city}, {selectedAddress.state}
                      </p>
                      <p>Pincode: {selectedAddress.pincode}</p>
                    </>
                  ) : (
                    <p className="text-muted">
                      No address selected yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
