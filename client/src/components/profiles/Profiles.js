import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading }, auth: {isAdminAuthenticated} }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  const profilesData = profiles.reduce((profile, obj) => {
    const status = obj.status;
    if (!profile[status]) {
      profile[status] = [];
    }
    profile[status].push(obj);
    return profile;
  }, {});
  return (
    <div className="container">
       {isAdminAuthenticated === true ? (
         <section className="container">
           {loading ? (
             <Spinner />
           ) : (
             <Fragment>
               <h1 className="large text-primary">Portfolios</h1>
               <p className="lead">
                 Browse and check with Portfolios
               </p>
               <div>
                {Object.keys(profilesData).map((StatusName, index) => (
                <div key={index}>
                  <p className='lead'>Job Role: {StatusName}</p>
                  <ul>
                    {profilesData[StatusName].map((obj, objIndex) => (
                      <li key={objIndex}>
                          <ProfileItem key={obj._id} profile={obj} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
               </div>
               <div className="profiles">
                 {/* {profiles.length > 0 ? (
                   profiles.map((profile) => (
                     <div>
                      <ProfileItem key={profile._id} profile={profile} />
                    </div>
                   ))
                 ) : (
                   <h4>No profiles found...</h4>
                 )} */}
               </div>
               {/* <p className='lead'>Company: {profiles[0].company}</p> */}
             </Fragment>
           )}
         </section>
       ):(
         <section className="container">
           {loading ? (
             <Spinner />
           ) : (
             <Fragment>
               <h1 className="large text-primary">Portfolios</h1>
               <p className="lead">
                 Browse and check with Portfolios
               </p>
               <div className="profiles">
                   <h4>No profiles found...</h4>
               </div>
             </Fragment>
           )}
         </section>
       )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
