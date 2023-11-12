import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, AddUser, EditUser } from "./containers/imports";
import { Sidebar } from "./components/imports";

function App() {
  return (
    <Router>
      <div className="app">
        <>
          <Sidebar />
        </>
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user" element={<EditUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
