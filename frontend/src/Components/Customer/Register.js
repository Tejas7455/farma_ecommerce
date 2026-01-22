import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


function Register() {

  const navigate = useNavigate();
  const baseUrl = 'http://127.0.0.1:8000/api/';
  const [formError, setFormError] = useState(false);
  const [errorMsg, seterrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [registerFormData, setRegisterFormData] = useState({
    "first_name": "",
    "last_name": "",
    "username": "",
    "email": "",
    "password": "",

  });

  const inputHandler = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value
    })
  };

  const submitHandler = (event) => {
    const formData = new FormData();
    formData.append('first_name', registerFormData.first_name);
    formData.append('last_name', registerFormData.last_name);
    formData.append('username', registerFormData.username);
    formData.append('email', registerFormData.email);
    formData.append('mobile', registerFormData.mobile);
    formData.append('password', registerFormData.password);



    //Submit Data
    axios.post(baseUrl + 'customer/register/', formData)
      .then(function (response) {
        if (response.data.bool == false) {
          seterrorMsg(response.data.msg);
          setSuccessMsg('');
        } else {
          setRegisterFormData({
            "first_name": "",
            "last_name": "",
            "username": "",
            "email": "",
            "mobile": "",
            "password": "",
          });
          seterrorMsg('');
          setSuccessMsg(response.data.msg);
          setTimeout(() => {
            navigate('/customer/login/');
          }, 1500);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const buttonEnable = (registerFormData.first_name !== '') && (registerFormData.last_name !== '') &&
    (registerFormData.username !== '') && (registerFormData.email !== '') && (registerFormData.mobile !== '')
    && (registerFormData.password !== '');

  return (

    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-8 col-12 offset-2'>
          <div className="card">
            <h4 className='card-header'>Register</h4>
            <div className='card-body'>
              <p className='text-muted'><strong className='text-danger'> Note: All fields are required</strong></p>
              {successMsg && <p className='text-success'>{successMsg}</p>}
              {errorMsg && <p className='text-danger'>{errorMsg}</p>}
              <form className='container mt-4 mb-4'>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">First Name</label>
                  <input type="text" name="first_name" onChange={inputHandler} value={registerFormData.first_name}
                    className="form-control" id="firstname" />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">Last Name</label>
                  <input type="text" name="last_name" onChange={inputHandler} value={registerFormData.last_name}
                    className="form-control" id="lastname" />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" name="username" onChange={inputHandler} value={registerFormData.username}
                    className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" name="email" onChange={inputHandler} value={registerFormData.email}
                    className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">Mobile</label>
                  <input type="number" name="mobile" onChange={inputHandler} value={registerFormData.mobile}
                    className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name="password" onChange={inputHandler} value={registerFormData.password}
                    className="form-control" id="password" />
                </div>

                <button type="button" disabled={!buttonEnable} onClick={submitHandler}
                  className="btn btn-primary btn-lg">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register;