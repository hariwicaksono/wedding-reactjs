import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/Home';
 
function App() {
  return (
    <BrowserRouter basename={'/wedding-home'}>
        <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
