import React from 'react';
import './App.css';
import Header from "./Components/Header/Header"
import Card from './Components/Card/Card'

const Today = new Date();


const App = () => {
  return (
    <div>
     <Header />
     <Card />
    </div>
  );
};

export default App