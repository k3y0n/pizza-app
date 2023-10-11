import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper/Wrapper';
import Header from './components/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Details from './pages/Details';

function App() {
  const [search, setSearch] = useState('');

  return (
    <Wrapper>
      <Header search={search} setSearch={setSearch} />
      <div className='content'>
        <Routes>
          <Route
            path='/'
            element={<Home search={search}/>}
          />
          <Route
            path='/Cart'
            element={<Cart />}
          />
          <Route
            path='/Details/:id'
            element={<Details />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Wrapper>
  );
}

export default App;
