import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Character from './pages/Character'
import Location from './pages/Location'

const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/characters" element={<Character />} />
                    <Route path="/location" element={<Location />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
