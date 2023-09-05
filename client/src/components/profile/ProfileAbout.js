import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import api from '../../utils/api';

const ProfileAbout = ({
  profile: {
    _id,
    bio,
    company,
    social,
    website,
    user: { email }
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
          const { filename } = response.data; // Assuming the API returns an array of paths
          console.log(filename);
          setImageFilename(filename);

        } catch (error) {
          console.error('Error fetching image filenames:', error);
        }
      };
      fetchImageFilenames();
    }, [_id]);
  
  return(
  
    <div className="about-company">
    {bio && (
      <Fragment>
          <h1>About <span>{company.trim().split(' ')[0]}</span></h1>
          <p>{bio}</p>
            {/* <a href="#" style="display: inline-block;"><button className="read-more">Read More</button></a> */}
          <div className='line' />
          <div className="contact-me">
            <h1>Contact <span>Me</span></h1>
            <div className="contact-btns">
              <div className="contact-link">
                    {/* <a href="https://www.linkedin.com/in/adarsha-m-a77a6b229/" target="_blank"><i className='bx bxl-linkedin'></i></a> */}
                {social
                  ? Object.entries(social)
                    .filter(([_, value]) => value)
                    .map(([key, value]) => (
                      <a
                        key={key}
                        href={value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`bx bxl-${key}`}></i>
                      </a>
                      ))
                  : null}
                </div>
            </div>
          </div>
          <div className="bg-dark pb-4">
            <h1 className="text-center text-light mb-2 pt-3">Gallery</h1>
            <div className="scroll-container">
                <img src={window.location.origin + `/uploads/${imageFilename}`} alt="" srcset="" />
                <img src={window.location.origin + `/uploads/${imageFilename}`} alt="" srcset="" />
                <img src={window.location.origin + `/uploads/${imageFilename}`} alt="" srcset="" />
                <img src={window.location.origin + `/uploads/${imageFilename}`} alt="" srcset="" />
            </div>
          </div>
          <div></div>
        <div className="pt-4 pb-3 bg-primary text-white text-center">
        <div className="container">
            <p className="lead"><i className="bx bx-envelope text-light"></i> {email} </p>
            <p className='lead'><i className="bx bx-globe text-light"></i> {website} </p>
        </div>
    </div>
      </Fragment>
    )}
    </div>
)};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
