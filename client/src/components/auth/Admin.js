import React, { useState } from 'react';
import {  Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAdmin } from '../../actions/auth';

const LoginAdmin = ({ loginAdmin, isAdminAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    loginAdmin(email, password);
  };

  if (isAdminAuthenticated) {
    return <Navigate to="/profiles" />;
  }

  return (
    <section className="container">
      <h1 className="large text-primary">Sign In As Admin</h1>
      <p className="lead">
        <i className="fas fa-user" /> Sign Into Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </section>
  );
};

LoginAdmin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  isAdminAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAdminAuthenticated: state.auth.isAdminAuthenticated
});

export default connect(mapStateToProps, { loginAdmin })(LoginAdmin);
