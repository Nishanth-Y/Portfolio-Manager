import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import Profiles from '../profiles/Profiles';

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, isAdminAuthenticated }
}) => {
  if (loading) return <Spinner />;
  if (isAuthenticated) return <Component />;
  if (isAdminAuthenticated) return <Profiles />;
  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
