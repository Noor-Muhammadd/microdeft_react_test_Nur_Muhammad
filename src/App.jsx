import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
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
    </Router>
  );
};

export default App;
