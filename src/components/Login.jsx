import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('access_token');
  if (token) {
    navigate('/dashboard');
  }
}, []); // ✅ run only on first render

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    } else if (email.includes(' ')) {
      setEmailError('Email cannot contain spaces.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required.');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await fetch('https://bosslite.oteqprojects.co.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.access_token) {
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('token_type', data.token_type);
        localStorage.setItem('user_id', data.user_id);
        localStorage.setItem('user_name', data.user_name);
        localStorage.setItem('role_id', data.role_id);
        localStorage.setItem('role_name', data.role_name);
        localStorage.setItem('email', data.email);
        localStorage.setItem('permissions', JSON.stringify(data.permissions));

        login(); // trigger auth context
        navigate('/dashboard');
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      alert('Login error: ' + err.message);
    }
  };

  return (
    <div className="login-page bg-light" style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">Login</h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form className="row g-4" onSubmit={handleSubmit}>
                      <div className="col-12">
                        <label>Username<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                          <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Username"
                          />
                        </div>
                        {emailError && <span className="error-message text-danger">{emailError}</span>}
                      </div>

                      <div className="col-12">
                        <label>Password<span className="text-danger">*</span></label>
                        <div className="input-group">
                          <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                          />
                          <div
                            className="input-group-text"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ cursor: 'pointer' }}
                          >
                            <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
                          </div>
                        </div>
                        {passwordError && <span className="error-message text-danger">{passwordError}</span>}
                      </div>

                      <div className="col-12 d-flex justify-content-between align-items-center">
                        <button type="submit" className="btn btn-dark w-100">
                          <i className="fa fa-sign-in" aria-hidden="true"></i> Login Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-md-5 ps-0 d-none d-md-block">
                  <div className="form-right h-100 text-white text-center bg-dark d-flex flex-column justify-content-center align-items-center">
                    <img
                      src="assets/images/logo/loginlogo.png"
                      alt="Logo"
                      className="logo logo-sm mb-3"
                      style={{ width: '200px' }}
                    />
                    <h2 className="fs-1">Welcome To BossLite!!!</h2>
                  </div>
                </div>
              </div>
            </div>

            <footer className="text-center mt-4">
              <p className="mb-0">
                &copy; 2025 All rights reserved | Developed with
                <i className="bi bi-heart-fill text-danger mx-1"></i> by
                <a href="https://www.klouddata.com/" target="_blank" className="text-decoration-none"> KloudData</a>.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
