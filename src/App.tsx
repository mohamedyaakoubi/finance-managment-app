// App.tsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import Contact from './Components/Contact';
import { LogIn } from './Components/LogIn';
import { SignUp } from './Components/SignUp';
import { Footer } from './Components/Footer';
import { DashBoard } from './Components/DashBoard';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
