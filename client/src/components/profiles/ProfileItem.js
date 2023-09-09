import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

const ProfileItem = ({
  profile: {
    _id,
    user:{
      name, avatar
    },
    company,
    location
  }
}) => {
  const [imageFilename, setImageFilename] = useState('');
    useEffect(() => {
      // Define a function to fetch image filenames
      const fetchImageFilenames = async () => {
        try {
          const response = await api.get(`upload/${_id}`, {
            headers: {"Access-Control-Allow-Origin": "*"}
          });
          const { filename } = response.data.images[0]; // Assuming the API returns an array of paths
          console.log(filename);
          setImageFilename(filename);

        } catch (error) {
          console.error('Error fetching image filenames:', error);
        }
      };
      fetchImageFilenames();
    }, [_id]);
  return (
    <div className='profile bg-light'>
      <img src={window.location.origin + `/uploads/${imageFilename}`} height={150} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <p>
          {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${name}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
    </div>

  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
