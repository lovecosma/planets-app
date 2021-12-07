import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Hello from Rails!</h1>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
