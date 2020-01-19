import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './router';
import NoPageFound from './pages/NoPageFound/NoPageFound';
import './App.scss';

const App = () => {
  console.log('This console will be remove in Production mode');
  const routeResult = useRoutes(routes);

  return (
    <div className="app-container">
      {routeResult || <NoPageFound />}
    </div>
  );
}

export default App;
