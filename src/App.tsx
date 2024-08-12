import Home from "./pages/Home";
import About from "./pages/About";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import ServicesForClients from "./pages/ServicesForClients";
import ServicesForCandidates from "./pages/ServicesForCandidates";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route
          path="/Services/Clients"
          element={<ServicesForClients></ServicesForClients>}
        ></Route>
        <Route
          path="/Services/Candidates"
          element={<ServicesForCandidates></ServicesForCandidates>}
        ></Route>
        <Route path="/Clients" element={<Clients></Clients>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Jobs" element={<Jobs></Jobs>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
