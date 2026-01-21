import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

function AddAddress() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: '',
    landmark: '',
    road: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { address, city, state, pincode } = formData;

    if (!address || !city || !state || !pincode) {
      alert('Please fill all required fields');
      return;
    }

    const existingAddresses =
      JSON.parse(localStorage.getItem('addresses')) || [];

    const updatedAddresses = [
      ...existingAddresses,
      {
        id: Date.now(),
        ...formData,
        isDefault: false
      }
    ];

    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));

    navigate('/customer/address');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-2 col-12 mb-5'>
          <Sidebar />
        </div>

        <div className='col-md-10 col-12 mb-5'>
          <div className="card">
            <h4 className='card-header'>Add Address</h4>

            <form className='container mt-4 mb-4' onSubmit={handleSubmit}>
              
              <div className="mb-3">
                <label className="form-label">Address *</label>
                <textarea
                  className="form-control"
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Landmark</label>
                <input
                  type="text"
                  className="form-control"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Road</label>
                <input
                  type="text"
                  className="form-control"
                  name="road"
                  value={formData.road}
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">City *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">State *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">Pincode *</label>
                  <input
                    type="number"
                    className="form-control"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg">
                Save Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAddress;
