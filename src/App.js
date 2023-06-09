import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer'
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {


  return (
    <div className='entire-wrap'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
