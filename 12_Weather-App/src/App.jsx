import Header from "./components/Header"
import Card from "./components/Card"
import HistoryList from "./components/HistoryList"
import Search from "./components/Search"
import { useWeather } from "./contexts/WeatherContext"
import WeatherSkeleton from "./components/Skeloton"

function App() {

  const {isLoading} = useWeather();

  return (
    <>
      <Header />
      <main className="weather-stage">
        <div className="weather-content sticky">
          <Search />
          <HistoryList />
        </div>
        {isLoading ? <WeatherSkeleton/> : <Card />}
      </main>
    </>
  )
}

export default App