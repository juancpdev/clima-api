import styles from './App.module.css'
import Alert from './components/alert/Alert'
import Form from './components/Form/Form'
import Spinner from './components/Spinner/Spinner'
import WeatherDetail from './components/WeatherDetail/WeatherDetail'
import useWeather from './hooks/useWeather'

function App() {

  const { weather, fetchWeather, hasWeatherData, spinner, notFound } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>

      <div className={styles.container}>
        
        <Form 
          fetchWeather = {fetchWeather}
        />
        {notFound && <Alert>Ciudad no encontrada</Alert>}
        {spinner && <Spinner/>}
        {hasWeatherData && 
          <WeatherDetail
          weather = {weather}
          />
        }
        
      </div>
    </>
  )
}

export default App
