// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"
// function App() {
//   return (
//    <>
//     <Navbar />
//     <main>
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Contact />
//     </main>
//     <Footer />
//    </>
//   )
// }

// export default App;


import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./pages/ProjectDetails";
import ScrollToTop from "./components/Scrolltop";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
