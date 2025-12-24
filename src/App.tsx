import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Play from './pages/Play';
import ChatPage from './pages/ChatPage'; // Import ChatPage

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="about" element={<About />} />
          <Route path="play" element={<Play />} />
          <Route path="chat" element={<ChatPage />} /> {/* New Chat Route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;