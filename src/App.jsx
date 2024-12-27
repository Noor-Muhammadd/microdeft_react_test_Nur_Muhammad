import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import CreateCourse from "./pages/CreateCourse/CreateCourse";
import Home from "./pages/Home/Home";
import Layout from "./layout/Main";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<>
            <Home />
          </>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/course"
            element={
              <>
                <PrivateRoute>
                  <CreateCourse />
                </PrivateRoute>
              </>
            }
          />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold text-gray-800">
                  404 - Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
