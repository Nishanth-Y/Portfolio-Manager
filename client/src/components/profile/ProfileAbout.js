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
  const [imageFilename, setImageFilename] = useState([]);
  const [logoImage, setLogoImage] = useState('');
  useEffect(() => {
    const fetchImageFilenames = async () => {
      try {
        const response = await api.get(`upload/${_id}`, {
          headers: { 'Access-Control-Allow-Origin': '*' }
        });
        const imageFileNames = response.data;
        const logo = imageFileNames.images[1].filename;
        const imagesFile = imageFileNames.images.filter(
          (image) =>
            image !== imageFileNames.images[0] &&
            image !== imageFileNames.images[1]
        );
        setLogoImage(logo);
        setImageFilename(imagesFile);
      } catch (error) {
        console.error('Error fetching image filenames:', error);
      }
    };
    fetchImageFilenames();
  }, [_id]);

  return (
    <div className="about-company">
      {bio && (
        <Fragment>
          <h1>
            About
            <br />
            {console.log(logoImage)}
            <img
              src={window.location.origin + `/uploads/${logoImage}`}
              alt="logo"
              style={{ width: '10%', borderRadius: '50%' }}
            />
            <span style={{ paddingLeft: '20px' }}>
              {company.trim().split(' ')[0]}
            </span>
          </h1>
          <p>{bio}</p>
          <div className="line" />
          <div className="contact-me">
            <h1>
              Contact <span>Me</span>
            </h1>
            <div className="contact-btns">
              <div className="contact-link">
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
                          {key === 'plus' ? (
                            <i className={`bx bx-link`}></i>
                          ) : (
                            <i className={`bx bxl-${key}`}></i>
                          )}
                        </a>
                      ))
                  : null}
              </div>
            </div>
          </div>
          <div className="bg-dark pb-4">
            <h1 className="text-center text-light mb-2 pt-3">Gallery</h1>
            <div className="scroll-container">
              {imageFilename.map((image) => (
                <img
                  key={image._id}
                  src={window.location.origin + `/uploads/${image.filename}`}
                  alt="Gallery"
                />
              ))}
            </div>
          </div>
          <div></div>
          <div className="pt-4 pb-3 bg-primary text-white text-center">
            <div className="container">
              <p className="lead">
                <i className="bx bx-envelope text-light"></i> {email}{' '}
              </p>
              <p className="lead">
                <i className="bx bx-globe text-light"></i> {website}{' '}
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
