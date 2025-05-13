import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";
import ValidateUser from "./admin/components/ValidateUser";
import Test from "./admin/components/Test";
import Login from "./admin/components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          {/* מסלולים ציבוריים */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="login" element={<Login />} />
          {/* מסלולים למשתמש admin */}
          <Route
            path="/admin"
            element={
              <ValidateUser>
                <Test />
              </ValidateUser>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
