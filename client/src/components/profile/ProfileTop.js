import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getImagefromId } from '../../actions/image'
import { connect } from 'react-redux'
import api from '../../utils/api'

const ProfileTop = ({ profile: {_id, company, location, status, user:{ name }} }) => {

  const [imageFilename, setImageFilename] = useState('');
    useEffect(() => {
      // Define a function to fetch image filenames
      const fetchImageFilenames = async () => {
        try {
          const response = await api.get(`upload/${_id}`, {
            headers: {"Access-Control-Allow-Origin": "*"}
          });
          const { filename } = response.data; // Assuming the API returns an array of paths
          console.log(filename);
          setImageFilename(filename);

        } catch (error) {
          console.error('Error fetching image filenames:', error);
        }
      };
      fetchImageFilenames();
    }, [_id]);
   
  return (
    
    <div className="header-div text-center">
    <div className="profile-section">
        <div className="profile-img">  
            <img src={window.location.origin + `/uploads/${imageFilename}`} alt="profile image"/>
        </div>
        <div className="information">
            <h1 className="name">{name}</h1>
            <h2>{status}</h2>
            <h2>{company}</h2>
            <h2>{location}</h2>
        </div>  
    </div>
  </div>
  )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop