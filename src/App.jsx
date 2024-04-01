import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Landing, Dashboard, AddUser, EditUser } from "./pages/imports";
import { useState, useEffect } from "react";
import { Sidebar } from "./components/imports";

function App() {
  const [sidebar, setSidebar] = useState();
  const history = useLocation();
  useEffect(() => {
    history.pathname !== "/" ? setSidebar(true) : setSidebar(false);
  }, [history]);
  return (
    <div className="">
      {sidebar && <Sidebar />}
      <div className={`${window.location.pathname !== "/" && "content"}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
