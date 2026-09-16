import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"

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