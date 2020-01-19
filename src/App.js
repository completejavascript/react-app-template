import React from 'react';
import { useRoutes } from 'hookrouter';
import { IntlProvider } from 'react-intl';
import messages_en from './translations/en.json';
import messages_vi from './translations/vi.json';
import routes from './router';
import NoPageFound from './pages/NoPageFound/NoPageFound';
import './App.scss';

const messages = {
  en: messages_en,
  vi: messages_vi
};

const language = 'en';

const App = () => {
  console.log('This console will be remove in Production mode');
  const routeResult = useRoutes(routes);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <div className="app-container">{routeResult || <NoPageFound />}</div>
    </IntlProvider>
  );
};

export default App;
