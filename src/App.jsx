import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';

import Content from './pages/Content.jsx';
import GraphicDetails from './pages/GraphicDetails.jsx';
import Certifications from "./pages/Certifications.jsx";
import Projects from "./pages/Projects.jsx";
import Chatbot from './components/Chatbot.jsx';
import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";
import Theme2 from "./pages/Theme2.jsx";
import { TransitionProvider } from "./context/TransitionContext.jsx";

function App() {
  return (
    <Preloader>
      <Router>
        <TransitionProvider>
          <Chatbot />
          <Routes>
            <Route path="/" element={
              <PageTransition>
                <Header />
                <Content />
              </PageTransition>
            } />
            <Route path="/graphic-design-details" element={<PageTransition><GraphicDetails /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/v2" element={<PageTransition><Theme2 /></PageTransition>} />
          </Routes>
        </TransitionProvider>
      </Router>
    </Preloader>
  );
}

export default App;