import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./features/login";
import Editprofile from "./pages/Editprofile"
 
 
import EditProfile from "./pages/EditProfile";
import Otp from "./features/Otp";

function App() {
  return (
    <Routes>
       <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editprofile" element={<Editprofile />} />
     <Route path="/" element={<Login />} />
    <Route path="/otp" element={<Otp />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
    
  );
}

export default App;