import React from 'react';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Data from '../../Data.json'

const Home = () => {

let items = []
 items = Data.map((item) => <Card name={item.name} address={item.address}/>)

    return (
        <>

            <div className="container">
              <Header />

              {items}

            </div>  
            
          </>

    );
};

export default Home;