import React from 'react';
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import { 
  Login, 
  Overview, 
  People, 
  Species, 
  Starships, 
  Film,
  Person,
  Starship,
  Specie,
} from './pages';
import { SWRConfig } from 'swr'


function App() {
  function localStorageProvider() {
    const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))
   
    window.addEventListener('beforeunload', () => {
      const appCache = JSON.stringify(Array.from(map.entries()))
      localStorage.setItem('app-cache', appCache)
    })
    return map
  }
  
  return (
    <React.Fragment>
      <SWRConfig value={{ provider: localStorageProvider }}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/overview' element={<Overview />} />
            <Route exact path='/people' element={<People />} />
            <Route exact path='/species' element={<Species />} />
            <Route exact path='/starships' element={<Starships />} />
            <Route exact path='/overview/:id' element={<Film />} />
            <Route exact path='/starships/:id' element={<Starship />} />
            <Route exact path='/species/:id' element={<Specie />} />
            <Route exact path='/people/:id' element={<Person />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </React.Fragment>
  );
}

export default App;
