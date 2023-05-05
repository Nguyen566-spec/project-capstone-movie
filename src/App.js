import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Router from './router'

function App() {
    return (
        <BrowserRouter>
            {/* <Route path="home" element={<>Home</>} /> */}
            <Router />
        </BrowserRouter>
    )
}

export default App
