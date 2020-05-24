import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Jobs from '../pages/Jobs';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Routes: React.FC = () => {
  return (
    <Switch>
      
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/jobs" component={Jobs} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Routes;
