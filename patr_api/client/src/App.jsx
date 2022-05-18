import React from 'react';
import { Routes, Route } from 'react-router-dom';

// components
import Documentation from './pages/Documentation';
import ErrorPageNotFound from './pages/ErrorPageNotFound';
import Events from './pages/Events';
import Home from './pages/Home';
import MainPage from './pages/MainPage';
import News from './pages/News';
import PaidServices from './pages/PaidServices';
import Park from './pages/Park';
import Staff from './pages/Staff';

// styles
import 'react-spinner-animated/dist/index.css';
import './styles/reset.css';
import './styles/style.css';
import NewsIdPage from './pages/NewsIdPage';
import EventIdPage from './pages/EventIdPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="paidservices" element={<PaidServices />} />
        <Route path="staff" element={<Staff />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="park" element={<Park />}>
          <Route path=":id" element={<Home />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="post-news" element={<NewsIdPage />}>
          <Route path=":id" element={<NewsIdPage />} />
        </Route>
        <Route path="post-event" element={<EventIdPage />}>
          <Route path=":id" element={<EventIdPage />} />
        </Route>
      </Route>
      <Route path="*" element={<ErrorPageNotFound />} />
    </Routes>
  );
}

export default App;
