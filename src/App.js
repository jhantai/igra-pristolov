import React from 'react';
import './App.css'; 
import GetImgs from './pages/imgs/imgs';
import Character from './pages/character/character';
import DetailedPage from './pages/detailedPage/detailedPage';

import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <div className="App">
    <Routes>
      <Route exact path='/' element={<GetImgs/>}/>
      <Route exact path='/Character' element={<Character/>}/>
      <Route exact path='/hero/:id' element={<DetailedPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
