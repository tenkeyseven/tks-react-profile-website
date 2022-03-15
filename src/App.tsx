import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Friend from "./pages/Friend";

function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <Navbar />

      <main className="w-screen flex items-center justify-center">
        {/* Here are the routes, home and about, please add them, thanks. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/friend" element={<Friend />}/>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
