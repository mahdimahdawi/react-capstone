import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/home';
import DetailPage from './components/pages/details';
import { fetchAllCountyies } from './redux/cases';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchAllCountyies());
  },[dispatch]);
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/country/:countryName' element={<DetailPage />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
