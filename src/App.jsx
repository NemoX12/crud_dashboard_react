import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, Dashboard, AddUser, EditUser } from "./pages/imports";
import { Sidebar } from "./components/imports";

function App() {
  return (
    <Router>
      <div className="app">
        {window.location.pathname !== "/" && (
          <>
            <Sidebar />
          </>
        )}
        <div className={`${window.location.pathname !== "/" && "content"}`}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
