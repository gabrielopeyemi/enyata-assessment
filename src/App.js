import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { Login, Overview, People, Species, Starships } from './pages';


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/overview' element={<Overview />} />
          <Route exact path='/people' element={<People />} />
          <Route exact path='/species' element={<Species />} />
          <Route exact path='/starships' element={<Starships />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
