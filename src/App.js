import React from 'react';
import { connect } from 'react-redux';
import { useRoutes } from 'hookrouter';
import { IntlProvider } from 'react-intl';
import en from './translations/en.json';
import vi from './translations/vi.json';
import routes from './router';
import NoPageFound from './pages/NoPageFound/NoPageFound';
import './App.scss';

const messages = { en, vi };

const App = props => {
  console.log('This console will be remove in Production mode');
  const routeResult = useRoutes(routes);
  const language = props.languageTrans;

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="app-container">{routeResult || <NoPageFound />}</div>
    </IntlProvider>
  );
};

export default connect(
  state => ({
    languageTrans: state.system.languageTrans
  }),
  {}
)(App);
