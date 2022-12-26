import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Uiniqu from './layouts/Uiniqu';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Uiniqu />
    </Router>
  );
};

export default App;
