import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import Details from "./pages/Details";
import Impression from "./pages/Impression";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dtf" element={<Details />} />

        <Route exact path="/test" element={<Test />} />
        <Route exact path="/impression" element={<Impression />} />



      </Routes>
    </Router>
  );
}

export default App;
