import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Products from './Components/Products';
import Contact from './Pages/contact';
import Software from "./Pages/Software";
import Hardware from "./Pages/Hardware";
import Services from "./Pages/Services";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/software" element={<Software />} />
        <Route path="/hardware" element={<Hardware />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;