import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileByName } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getImagefromId } from '../../actions/image';
import { deleteAccountByName } from '../../actions/profile';

const Profile = ({ getProfileByName, deleteAccountByName, profile: { profile }, auth }) => {
  const { name } = useParams();
  useEffect(() => {
    getProfileByName(name);
  }, [getProfileByName, name]);

  return (
    <section className="container">
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}
          {auth.isAdminAuthenticated && (
              <button className="btn btn-danger" onClick={() => deleteAccountByName(name)}>
               <i className="fas fa-user-minus" /> Delete My Account
             </button>
            )}

             <ProfileTop profile={profile}/>
             <ProfileAbout profile={profile}/>

        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteAccountByName: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { deleteAccountByName, getProfileByName })(Profile);
