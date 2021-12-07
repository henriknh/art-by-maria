import './App.scss';
import { Header } from './header/Header';
import { About } from './about/About';
import { Contact } from './contact/Contact';
import { Portfolio } from './portfolio/Portfolio';
import { Footer } from './footer/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <div className="content flex flex-1">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
