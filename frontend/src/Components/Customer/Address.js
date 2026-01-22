import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { NavLink } from 'react-router-dom';

function Address() {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem('addresses')) || [];

    const normalized = saved.map(a => ({
      ...a,
      isSelected: a.isSelected || false
    }));

    setAddresses(normalized);
    localStorage.setItem('addresses', JSON.stringify(normalized));
  }, []);

  const handleSelectAddress = (id) => {
    const updated = addresses.map(item => ({
      ...item,
      isSelected: item.id === id
    }));

    setAddresses(updated);
    localStorage.setItem('addresses', JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <div className="row">

        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <NavLink
            to="/customer/add-address/"
            className="btn btn-outline-success mb-3 float-end"
          >
            + Add Address
          </NavLink>

          <div className="row">
            {addresses.length === 0 && (
              <p className="text-muted">No addresses added yet.</p>
            )}

            {addresses.map(item => (
              <div className="col-md-4 mb-3" key={item.id}>
                <div
                  className={`card h-100 ${
                    item.isSelected ? 'border border-success border-2' : ''
                  }`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleSelectAddress(item.id)}
                >
                  <div className="card-body">

                    {item.isSelected && (
                      <span className="badge bg-success float-end">
                        Selected
                      </span>
                    )}

                    <p className="fw-bold mt-2">{item.address}</p>
                    {item.road && <p>{item.road}</p>}
                    {item.landmark && <p>Landmark: {item.landmark}</p>}
                    <p>{item.city}, {item.state}</p>
                    <p>Pincode: {item.pincode}</p>

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
