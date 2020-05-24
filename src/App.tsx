import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import Navs from './components/Navs';

const App: React.FC = () => {
  return (
    <>

      <BrowserRouter>
      <Navs/>
        <Routes />
    
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
};

export default App;
