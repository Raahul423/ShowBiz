import React from "react"
import { Route, Routes, useLocation } from "react-router"
import Home from "./Pages/Home"
import Movies from "./Pages/Movies"
import Moviesdetails from "./Pages/Moviesdetails"
import Seatlayout from "./Pages/Seatlayout"
import Favourite from "./Pages/Favourite"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Toaster } from "react-hot-toast"
import Theaters from "./Pages/Theaters"



function App() {

  const adminroute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      {<Navbar />}
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:id" element={<Moviesdetails />} />
        <Route path="/Theaters" element={<Theaters/>} />
        <Route path="/Movies/:id/:date" element={<Seatlayout />} />
        <Route path="/Favorite" element={<Favourite />} />
      </Routes>

      {!adminroute && <Footer />}
    </>
  )
}

export default App
