import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/rooms' element={<Rooms />} />
      <Route exact path='/rooms/:slug' element={<Room />} />
      <Route path='/error' element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
