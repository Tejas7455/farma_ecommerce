import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

function Profile() {

  const [profile, setProfile] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    image: ''
  });

  // Load profile data if exists
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    console.log('Loaded profile:', savedProfile);

    if (savedProfile) {
      setProfile({
        firstname: savedProfile.firstname || '',
        lastname: savedProfile.lastname || '',
        username: savedProfile.username || '',
        email: savedProfile.email || '',
        image: savedProfile.image || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({
        ...profile,
        image: reader.result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
    alert('Profile updated successfully!');
  };

  return (
    <div className='container mt-5'>
      <div className='row'>

        <div className='col-md-2 col-12 mb-5'>
          <Sidebar />
        </div>

        <div className='col-md-10 col-12 mb-5'>
          <div className="card">
            <h4 className='card-header'>Update Profile</h4>

            <form className='container mt-4 mb-4' onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  value={profile.firstname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  value={profile.lastname}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={handleImageChange}
                />
              </div>

              {profile.image && (
                <img
                  src={profile.image}
                  alt="Profile"
                  className="mb-3 rounded"
                  width="100"
                />
              )}

              <button type="submit" className="btn btn-primary btn-lg">
                Save Profile
              </button>

            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
