import logo from './logo.svg';
import './App.css';
import Restaurant from './Restaurant';
import Header from './Header';
import Footer from './Footer';
import { Route, Router, Routes } from 'react-router-dom';
import Restview from './Restview';





function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}></Route>
        <Route path='/viewRest/:id' element={<Restview></Restview>}></Route>
      </Routes>
=
      <Footer></Footer>
    </div>
  );
}

export default App;
