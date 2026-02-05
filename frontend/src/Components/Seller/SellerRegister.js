import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SellerRegister() {
  const navigate = useNavigate();
  const baseUrl = 'http://127.0.0.1:8000/api/';

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  // ✅ Input change handler
  const inputHandler = (e) => {
    setRegisterFormData({
      ...registerFormData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Submit handler
  const submitHandler = () => {
    const formData = new FormData();
    Object.keys(registerFormData).forEach(key => {
      formData.append(key, registerFormData[key]);
    });

    axios.post(baseUrl + 'seller/register/', formData)
      .then((response) => {
        if (response.data.bool === false) {
          setErrorMsg(response.data.msg);
          setSuccessMsg('');
        } else {
          localStorage.setItem('profile', JSON.stringify({
            firstname: registerFormData.first_name,
            lastname: registerFormData.last_name,
            username: registerFormData.username,
            email: registerFormData.email,
            image: ''
          }));

          setSuccessMsg('Registration successful 🎉');
          setErrorMsg('');

          setRegisterFormData({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            mobile: "",
            password: "",
          });

          setTimeout(() => navigate('/seller-login'), 2000);
        }
      })
      .catch(() => {
        setErrorMsg('An error occurred during registration.');
      });
  };

  const buttonEnable =
    registerFormData.first_name &&
    registerFormData.last_name &&
    registerFormData.username &&
    registerFormData.email &&
    registerFormData.mobile &&
    registerFormData.password;

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className="card">
            <h4 className='card-header'>Seller Register</h4>

            <div className='card-body'>
              <p className='text-danger'><strong>All fields are required</strong></p>

              {successMsg && <p className='text-success'>{successMsg}</p>}
              {errorMsg && <p className='text-danger'>{errorMsg}</p>}

              <div className="mb-3">
                <label>First Name</label>
                <input type="text" name="first_name" className="form-control"
                  value={registerFormData.first_name} onChange={inputHandler} />
              </div>

              <div className="mb-3">
                <label>Last Name</label>
                <input type="text" name="last_name" className="form-control"
                  value={registerFormData.last_name} onChange={inputHandler} />
              </div>

              <div className="mb-3">
                <label>Username</label>
                <input type="text" name="username" className="form-control"
                  value={registerFormData.username} onChange={inputHandler} />
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" className="form-control"
                  value={registerFormData.email} onChange={inputHandler} />
              </div>

              <div className="mb-3">
                <label>Mobile</label>
                <input type="number" name="mobile" className="form-control"
                  value={registerFormData.mobile} onChange={inputHandler} />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input type="password" name="password" className="form-control"
                  value={registerFormData.password} onChange={inputHandler} />
              </div>

              <button
                className="btn btn-primary btn-lg"
                disabled={!buttonEnable}
                onClick={submitHandler}
              >
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
