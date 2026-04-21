import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Content from './pages/Content.jsx';
import GraphicDetails from './pages/GraphicDetails.jsx';
import Certifications from "./pages/Certifications.jsx";
import Chatbot from './components/Chatbot.jsx';


function App() {
  return (
    <Router>
      <Chatbot />
      <Routes>
        
        <Route path="/" element={<><Header /><Content /></>} />
        <Route path="/graphic-design-details" element={<GraphicDetails />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </Router>
  );
}

export default App;
