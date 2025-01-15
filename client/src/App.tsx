import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chat from "./views/chat/Chat";
import Type from "./views/type/Type";
import Login from "./views/auth/Login";
import ForgetPassword from "./views/auth/ForgetPassword";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/select-type" element={<Type />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
