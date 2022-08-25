import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UiTest from './pages/UiTest';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/uitest" element={<UiTest />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
