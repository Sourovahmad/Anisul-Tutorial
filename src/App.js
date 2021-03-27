import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Card from './Components/Card/Card'

const Today = new Date();


const App = () => {
  return (
    <>

      <div className="container">
            <Header />
        <div className="row">


      
          
          <Card name="sajid shah" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>

    </>
  );
};

export default App