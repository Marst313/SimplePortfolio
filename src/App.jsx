import { Route, Routes } from 'react-router-dom';
import { AboutPage, ExperiencePage, ProjectsPage } from './pages/';
import Landing from './pages/Landing';
import { Navbar } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
