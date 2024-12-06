import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react'
import WeatherCard from './components/WeatherCard'
import Search from './components/Search'
import Header from './components/Header'
import MyFooter from './components/MyFooter'
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [city, setCity] = useState('Rome')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const apiKey = '4b16c95e11d22feaaaaa45d129396fb5'

  const fetchWeather = (city) => {
    setLoading(true)
    setError('')
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('City not found')
        }
        return response.json()
      })
      .then((data) => {
        setWeather(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchWeather(city)
  }, [city])

  return (
    <div className="app">
      <Header />
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Search className="mt-2" setCity={setCity} />
            {loading && (
              <div className="loading-spinner">
                <Spinner animation="border" variant="primary" />
              </div>
            )}
            {error && <Alert variant="danger">{error}</Alert>}
            {weather && !loading && !error && <WeatherCard weather={weather} />}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </div>
  )
}

export default App
