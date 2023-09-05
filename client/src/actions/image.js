import api from '../utils/api';


import {
  PROFILE_ERROR,
  GET_POST,
} from './types';

// Get imagepath by ID
export const getImagefromId = (profileId) => async (dispatch) => {
  try {
      console.log(`http://localhost:6001/api/upload/${profileId}`);
      const res = await api.get(`http://localhost:6001/api/upload/${profileId}`);
      dispatch({
        type: GET_POST,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: 'FileUpload failed', status: err }
      });
    }
};