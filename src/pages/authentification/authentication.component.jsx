import React from 'react';

import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/sign-up.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="authentication-page">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
