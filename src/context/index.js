import React, { createContext, useState, useCallback } from 'react';
import { fromJS } from 'immutable';
import { profileConfig } from '../config/profile';

const ProfileContext = createContext(null);
const profileMap = fromJS(profileConfig);

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(profileMap);
  const setConfig = useCallback(
    (cb) => {
      setProfile((profile) => cb(profile));
    },
    [profile],
  );
  return <ProfileContext.Provider value={{ profile, setConfig }}>{children}</ProfileContext.Provider>;
};

export default ProfileContext;
