import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SellerRegister() {
  const navigate = useNavigate();
  const baseUrl = 'http://127.0.0.1:8000/api/';

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const [registerFormData, setRegisterFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    mobile: '',
    password: '',
  });

  // ✅ Input handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ Form submit
  const submitHandler = async (e) => {
    e.preventDefault();

    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);

    try {
      const response = await axios.post(
        baseUrl + 'seller/register/',
        registerFormData
      );

      if (response.data.bool === false) {
        setErrorMsg(response.data.msg || 'Registration failed.');
      } else {
        // Save profile to localStorage
        localStorage.setItem(
          'profile',
          JSON.stringify({
            firstname: registerFormData.first_name,
            lastname: registerFormData.last_name,
            username: registerFormData.username,
            email: registerFormData.email,
            image: '',
          })
        );

        setSuccessMsg('Registration successful 🎉');

        // Reset form
        setRegisterFormData({
          first_name: '',
          last_name: '',
          username: '',
          email: '',
          mobile: '',
          password: '',
        });

        // Redirect after 2 seconds
        setTimeout(() => navigate('/seller-login'), 2000);
      }
    } catch (error) {
      if (error.response) {
        setErrorMsg(error.response.data?.msg || 'Server error occurred.');
      } else {
        setErrorMsg('Network error. Please check your backend server.');
      }
    } finally {
      setLoading(false);
    }
  };

  // ✅ Enable button only if all fields filled (trim safe)
  const buttonEnable = Object.values(registerFormData).every(
    (value) => value.trim() !== ''
  );

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <h4 className="card-header text-center">Seller Register</h4>

            <div className="card-body">
              <p className="text-danger">
                <strong>All fields are required</strong>
              </p>

              {successMsg && (
                <div className="alert alert-success">{successMsg}</div>
              )}

              {errorMsg && (
                <div className="alert alert-danger">{errorMsg}</div>
              )}

              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    className="form-control"
                    value={registerFormData.first_name}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    className="form-control"
                    value={registerFormData.last_name}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    value={registerFormData.username}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={registerFormData.email}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    name="mobile"
                    className="form-control"
                    value={registerFormData.mobile}
                    onChange={inputHandler}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={registerFormData.password}
                    onChange={inputHandler}
                  />
                </div>

                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    disabled={!buttonEnable || loading}
                  >
                    {loading ? 'Registering...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
