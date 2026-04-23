import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';

import Content from './pages/Content.jsx';
import GraphicDetails from './pages/GraphicDetails.jsx';
import Certifications from "./pages/Certifications.jsx";
import Chatbot from './components/Chatbot.jsx';
import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";

function App() {
  return (
    <Preloader>
      <Router>
        <Chatbot />
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <Header />
              <Content />
              
            </PageTransition>
          } />
          <Route path="/graphic-design-details" element={<GraphicDetails />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </Router>
    </Preloader>
  );
}

export default App;