
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";

import Content from "./pages/Content.jsx";
import GraphicDetails from "./pages/GraphicDetails.jsx";
import Certifications from "./pages/Certifications.jsx";
import Projects from "./pages/Projects.jsx";

import Chatbot from "./components/Chatbot.jsx";
import Preloader from "./components/Preloader";
import PageTransition from "./components/PageTransition";

import Theme2Layout from "./themes/theme2/Theme2Layout.jsx";
import Theme2Home from "./themes/theme2/pages/Theme2Home.jsx";
import Theme2Projects from "./themes/theme2/pages/Projects.jsx";

import Theme3Layout from "./themes/theme3/Theme3Layout.jsx";
import Theme3Home from "./themes/theme3/pages/Theme3Home.jsx";
import Theme3Projects from "./themes/theme3/pages/Projects.jsx";
import Theme3Experience from "./themes/theme3/pages/Experience.jsx";
import Theme3Technologies from "./themes/theme3/pages/Technologies.jsx";
import Theme3Certifications from "./themes/theme3/pages/Certifications.jsx";
import Theme3GraphicDesign from "./themes/theme3/pages/GraphicDesign.jsx";

import { TransitionProvider } from "./context/TransitionContext.jsx";

function App() {
  return (
    <Preloader>
      <Router>
        <TransitionProvider>
          <Chatbot />

          <Routes>
            {/* DEFAULT HOMEPAGE - THEME 3 */}
            <Route
              path="/"
              element={<Navigate to="/theme3" replace />}
            />

            {/* THEME 1 ROUTES */}
            <Route
              path="/theme1"
              element={
                <PageTransition>
                  <Header />
                  <Content />
                </PageTransition>
              }
            />

            <Route
              path="/graphic-design-details"
              element={
                <PageTransition>
                  <GraphicDetails />
                </PageTransition>
              }
            />

            <Route
              path="/certifications"
              element={
                <PageTransition>
                  <Certifications />
                </PageTransition>
              }
            />

            <Route
              path="/projects"
              element={
                <PageTransition>
                  <Projects />
                </PageTransition>
              }
            />

            {/* THEME 2 ROUTES */}
            <Route
              path="/theme2"
              element={
                <PageTransition>
                  <Theme2Layout />
                </PageTransition>
              }
            >
              <Route index element={<Theme2Home />} />
              <Route path="projects" element={<Theme2Projects />} />
            </Route>

            {/* THEME 3 ROUTES */}
            <Route
              path="/theme3"
              element={
                <PageTransition>
                  <Theme3Layout />
                </PageTransition>
              }
            >
              <Route index element={<Theme3Home />} />
              <Route path="projects" element={<Theme3Projects />} />
              <Route path="experience" element={<Theme3Experience />} />
              <Route path="technologies" element={<Theme3Technologies />} />
              <Route path="certifications" element={<Theme3Certifications />} />
              <Route path="graphic-design" element={<Theme3GraphicDesign />} />
            </Route>

            {/* LEGACY REDIRECTS */}
            <Route
              path="/v2"
              element={<Navigate to="/theme2" replace />}
            />

            <Route
              path="/v3"
              element={<Navigate to="/theme3" replace />}
            />
          </Routes>
        </TransitionProvider>
      </Router>
    </Preloader>
  );
}

export default App;
