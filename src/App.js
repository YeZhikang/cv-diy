import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ProfileProvider } from './context';
import { MainPages } from './router';
import 'zent/css/index.css';
import './styles/index.scss';

const App = () => {
  return (
    <ProfileProvider>
      <MainPages />
    </ProfileProvider>
  );
};

ReactDom.render(<App />, document.querySelector('#app'));
