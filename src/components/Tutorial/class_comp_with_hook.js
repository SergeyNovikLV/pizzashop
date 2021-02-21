import React, { useState } from 'react';
import Pica from './Pica/Pica.js'
// import ReactDOM from 'react-dom';

const app = props =>  {
  const [picasState, setPicasState] = useState ({
    picas: [
      { name: 'Sieru', prisetPicasStatece: 2.80 },
      { name: 'Desu', price: 3.80 },
      { name: 'Sieru', price: 4.80},
      { name: 'Sieru', price: 5.80 },
    ],
    otherState: 'some other value'
  });

  const [otherState, setOtherState] = useState('some other state');
  
  const swithcHandler = () => {
   setPicasState({
    picas: [
      { name: 'Sieru', price: 5 },
      { name: 'Desu', price: 7 },
      { name: 'Sieru', price: 8},
      { name: 'Sieru', price: 9 },
    ]
  });
}
  
  
    return (
      <div className="App">
        <button onClick={swithcHandler}>Big pica</button>
        <Pica name={picasState.picas[0].name} price={picasState.picas[0].price} />
        <Pica name={picasState.picas[1].name} price={picasState.picas[1].price} />
        <Pica name={picasState.picas[2].name} price={picasState.picas[2].price} />
        <Pica name={picasState.picas[3].name} price={picasState.picas[3].price} />
      
      </div>
    );
 };


export default App;
