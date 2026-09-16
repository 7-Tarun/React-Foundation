import { Route, Routes} from "react-router-dom"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"

function App() {

  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>

    <Footer/>
    </>
  )
}

export default App