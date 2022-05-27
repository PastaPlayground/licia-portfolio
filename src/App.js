import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Masthead from "./components/Masthead/Masthead";

// import pages
import Illustration from "./components/Illustration/Illustration";
import Videos from "./components/Videos/Videos";
import Client from "./components/Client/Client";
import Works from "./components/Works/Works";

function App() {
  return (
    <div className="App">
      {/* include nav in all pages */}
      <Navigation />

      {/* wrap all routes */}
      <Routes>
        <Route path="/" element={<Masthead />} />
        {/* <Route path="illustration" element={<Illustration />} />
        <Route path="client" element={<Client />} />
        <Route path="videos" element={<Videos />} /> */}
        <Route path="works" element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
