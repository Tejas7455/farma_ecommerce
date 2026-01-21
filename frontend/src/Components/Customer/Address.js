import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

function Address() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const savedAddresses =
      JSON.parse(localStorage.getItem('addresses')) || [];
    setAddresses(savedAddresses);
  }, []);

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-3 col-12 mb-2'>
          <Sidebar />
        </div>

        <div className='col-md-9 col-12 mb-2'>
          <NavLink
            to='/customer/add-address/'
            className='btn btn-outline-success mb-3 float-end'
          >
            <i className='fa fa-plus' /> Add Address
          </NavLink>

          <div className='row'>
            {addresses.length === 0 && (
              <p className="text-muted">No addresses added yet.</p>
            )}

            {addresses.map((item) => (
              <div className='col-md-4 col-12 mb-3' key={item.id}>
                <div className='card h-100'>
                  <div className='card-body text-muted'>

                    {/* Default badge */}
                    {item.isDefault && (
                      <span className="badge bg-success mb-2">
                        Default
                      </span>
                    )}

                    <p className="mb-1 fw-semibold text-dark">
                      {item.address}
                    </p>

                    {item.road && (
                      <p className="mb-1">{item.road}</p>
                    )}

                    {item.landmark && (
                      <p className="mb-1">
                        Landmark: {item.landmark}
                      </p>
                    )}

                    <p className="mb-1">
                      {item.city}, {item.state}
                    </p>

                    <p className="mb-0">
                      Pincode: {item.pincode}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Address;
