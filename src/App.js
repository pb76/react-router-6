import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/user/1">User</Link>
        </nav>
        <div>Här kommer innehållet!</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
