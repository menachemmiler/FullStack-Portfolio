import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ValidateUser from './admin/components/auth/ValidateUser';
import Login from './admin/pages/login/Login';
import ProjectManagement from './admin/pages/projectManagement/ProjectManagement';
import Navigation from './components/navigation/Navigation';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { getProjects } from './redux/slices/projectSlice';
import { useAppDispatch } from './redux/store';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ValidateUser>
                <ProjectManagement />
              </ValidateUser>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
