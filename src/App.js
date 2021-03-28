import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Card from './Components/Card/Card';
import Data from './Data.json';

const App = () => {

  let items = []
  // for (let x=0; x<Data.length; x++){
  //   items.push(<Card name={Data[x].name} address={Data[x].address} />)
  // }

  items = Data.map((item)=> <Card name={item.name} address={item.address} /> )
  return (
    <>

      <div className="container">
            <Header />
        <div className="row">


      
          {items}
              

        </div>
      </div>
</>
  );
};

export default App