import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Component/Home';
import { NotificationContainer } from 'react-notifications';
import ScrollToTop from 'react-router-scroll-top';
 
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
        <Route path="/" exact component={Home} />
        <NotificationContainer />
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
