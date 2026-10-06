import Header from "./components/Header"
import Card from "./components/Card"
import HistoryList from "./components/HistoryList"
import Search from "./components/Search"

function App() {

  return (
    <>
      <Header />
      <main className="weather-stage">
        <div className="weather-content">
          <Search />
          <HistoryList />
          <Card />
        </div>
      </main>
    </>
  )
}

export default App