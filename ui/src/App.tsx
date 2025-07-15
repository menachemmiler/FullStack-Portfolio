import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import ValidateUser from "./admin/components/ValidateUser";
import Login from "./admin/components/auth/Login";
import ProjectManagement from "./admin/components/projectManagement";
import { useAppDispatch } from "./redux/store";
import { useEffect } from "react";
import { getProjects } from "./redux/slices/projectSlice";

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
