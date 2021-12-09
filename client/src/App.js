import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Router>
        <h1>Hello from Rails!</h1>
        <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
