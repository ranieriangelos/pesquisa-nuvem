import React from 'react';
import './App.css';
import MainPesquisa from './pages/MainPesquisa';
import ThankYouPage from './components/PaginaObrigado';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPesquisa></MainPesquisa>}></Route>
        <Route path='/thank-you' element={<ThankYouPage></ThankYouPage>}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
