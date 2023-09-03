import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({profile: {
    company, location, status, user:{
        name,avatar
    }
}}) => {
  return (
    
    <div class="header-div text-center">
    <div class="profile-section">
        <div class="profile-img">  
            <img src={avatar} alt="profile image"/>
        </div>
        <div class="information">
            <h1 class="name">{name}</h1>
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