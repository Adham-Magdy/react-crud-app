import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./pages/NavBar";
import User from "./pages/user/User";
import AddUser from "./pages/user/AddUser";
import Edit from "./pages/user/Edit";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
