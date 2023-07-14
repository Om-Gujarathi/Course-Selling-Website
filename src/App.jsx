import Appbar from "./components/Appbar";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./components/Courses";

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#eeeeee",
      }}
    >
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
