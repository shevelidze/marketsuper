import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UiTest from './pages/UiTest';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/uitest" element={<UiTest />} />
    </Routes>
  );
};

export default App;
