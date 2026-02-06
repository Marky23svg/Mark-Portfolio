import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header.jsx';
import Content from './Content.jsx';
import GraphicDetails from './GraphicDetails.jsx';



function App() {
  return (
    <Router>
      
      <Routes>
        
        <Route path="/" element={<><Header /><Content /></>} />
        <Route path="/graphic-design-details" element={<GraphicDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
