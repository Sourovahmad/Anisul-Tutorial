import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './Router/MyRouter';



const App = () => {

  return (
    <>

               <BrowserRouter>
                  <MyRouter />
              </BrowserRouter>
    </>
  );
};

export default App