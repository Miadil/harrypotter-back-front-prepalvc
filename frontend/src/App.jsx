import { Routes, Route } from "react-router-dom"

import Header from "@components/Header"

import Home from "./pages/Home"

import "./App.css"
import HousesContextProvider from "./contexts/HousesContext"

function App() {
  return (
    <div className="App">
      <HousesContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/spells" element={<Spells />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </HousesContextProvider>
    </div>
  )
}

export default App
