import React from 'react';

import DirectoryMenu from '../../components/directory-menu/directory-menu.component';

import './home-page.styles.scss';

const HomePage = (props) => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  );
};

export default HomePage;
