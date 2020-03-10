import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CodeDisplay from './components/CodeDisplay';
import Footer from './components/Footer';
import MainRouter from './components/MainRouter';



function App() {
  return (
    <div>
      <MainRouter>
        <Navbar />
          <CodeDisplay />
        <Footer />
      </MainRouter>
    </div>
   
   
  );
}

export default App;
