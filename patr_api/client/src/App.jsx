import React from 'react';
import { Routes, Route } from 'react-router-dom';
// components
import Documentation from './pages/Documentation';
import ErrorPageNotFound from './pages/ErrorPageNotFound';
import Events from './pages/Events';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import News from './pages/News';
import Park from './pages/Park';
import Staff from './pages/Staff';

// styles
import './styles/reset.css';
import './styles/style.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="staff" element={<Staff />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="park" element={<Park />} />
        <Route path="events" element={<Events />} />
      </Route>
      <Route path="*" element={<ErrorPageNotFound />} />
    </Routes>
  );
}

export default App;
