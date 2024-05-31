import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import MainPage from './components/views/mainPage';
import About from 'components/views/about';
import { store } from 'components/Redux/store';
import { Provider } from 'react-redux';
import Contact from 'components/views/contact';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Skills from 'components/views/skills';
import CommingSoon from 'components/views/commingSoon';
import Projects from 'components/views/projects';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
      <About />
      <Contact />
      <Skills />
      <Projects />
    </Provider>
    {/* <CommingSoon /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
