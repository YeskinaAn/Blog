import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
