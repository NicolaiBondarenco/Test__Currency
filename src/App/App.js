import React, { useEffect, useState, useRef } from 'react'
import Block from '../Block'
import './App.css'

const App = () => {
  const stateRef = useRef({})
  const [fromMenu, setFromMenu] = useState(false)
  const [toMenu, setToMenu] = useState(false)
  const [fromValue, setFromValue] = useState('USD')
  const [toValue, setToValue] = useState('UAH')
  const [fromCurrency, setFromCurrency] = useState(0)
  const [toCurrency, setToCurrency] = useState(0)

  const onChangeFromCurrency = (v) => {
    const res =
      (stateRef.current[toValue].value / stateRef.current[fromValue].value) * v
    setFromCurrency(v)
    setToCurrency(res.toFixed(3))
  }

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((res) => res.json())
      .then((body) => {
        setFromCurrency(1)
        stateRef.current = body.data
        onChangeFromCurrency(1)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="app">
      <header className="header">
        <Block
          currency={fromCurrency}
          changeCurrency={(v) => onChangeFromCurrency(v)}
          value={fromValue}
          menu={fromMenu}
          setMenu={() => setFromMenu((prev) => !prev)}
          changeValue={(el) => setFromValue(el)}
        />
        <Block
          currency={toCurrency}
          changeCurrency={(v) => setToCurrency(v)}
          value={toValue}
          menu={toMenu}
          setMenu={() => setToMenu((prev) => !prev)}
          changeValue={(el) => setToValue(el)}
        />
      </header>
    </div>
  )
}

export default App
