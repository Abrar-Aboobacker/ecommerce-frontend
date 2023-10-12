import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <BrowserRouter>
    <Toaster position="top-center" reverseOrder={false} />
    <Routes>
    <Route path="/" element={<HomePage />} />
      </Routes>    
    </BrowserRouter>
    </>
  );
}

export default App;
