import Navbar from './components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Character from './pages/Character'
import Location from './pages/Location'

const App = () => {
    const theme = createTheme({
        typography: {
            fontFamily: ['Raleway', 'sans-serif'].join(','),
        },
        palette: {
            mode: 'dark',
        },
    })

    return (
        <>
            <Router>
                <ThemeProvider theme={theme}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/characters" element={<Character />} />
                        <Route path="/location" element={<Location />} />
                    </Routes>
                </ThemeProvider>
            </Router>
        </>
    )
}

export default App
