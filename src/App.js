import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './app/Home/Home'
import NavbarMenu from './components/NavbarMenu/NavbarMenu'

function App() {
  return (
    <div className='App'>
      <Router>
        <NavbarMenu />
        <Route path='/' exact component={HomePage} />
      </Router>
    </div>
  )
}
export default App;
