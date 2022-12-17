import React, { useEffect, useState, useRef } from 'react'
import Block from '../Block'
import './App.css'

const App = () => {
  const stateRef = useRef({})
  const [updateTime, setUpdateTime] = useState('')
  const [fromMenu, setFromMenu] = useState(false)
  const [toMenu, setToMenu] = useState(false)
  const [fromValue, setFromValue] = useState('USD')
  const [toValue, setToValue] = useState('UAH')
  const [fromCurrency, setFromCurrency] = useState(1)
  const [toCurrency, setToCurrency] = useState(0)
  const [fromError, setFromError] = useState(false)
  const [toError, setToError] = useState(false)
  console.log(updateTime.last_updated_at)

  const f = updateTime.last_updated_at.split('T')
  console.log(f)

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then((res) => res.json())
      .then((body) => {
        stateRef.current = body.data
        setUpdateTime(body.meta)
        onChangeFromCurrency(fromCurrency)
      })
      .catch((err) => console.log(err))
  }, [fromValue, toValue])

  const onChangeFromValue = (cur) => {
    setFromValue(cur)
  }

  const onChangeToValue = (cur) => {
    setToValue(cur)
  }

  const onChangeFromCurrency = (v) => {
    if (v < 0) {
      return setFromError(true)
    } else if (v >= 0) {
      setFromError(false)
      const res =
        (stateRef.current[toValue].value / stateRef.current[fromValue].value) *
        v
      setToCurrency(res.toFixed(3))
      setFromCurrency(v)
    }
  }

  const onChangeToCurrency = (v) => {
    if (v < 0) {
      return setToError(true)
    } else if (v >= 0) {
      setToError(false)
      const res =
        (stateRef.current[fromValue].value / stateRef.current[toValue].value) *
        v
      setFromCurrency(res.toFixed(3))
      setToCurrency(v)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <Block
          error={fromError}
          currency={fromCurrency}
          changeCurrency={onChangeFromCurrency}
          value={fromValue}
          menu={fromMenu}
          setMenu={() => setFromMenu((prev) => !prev)}
          changeValue={onChangeFromValue}
        />
        <Block
          error={toError}
          currency={toCurrency}
          changeCurrency={onChangeToCurrency}
          value={toValue}
          menu={toMenu}
          setMenu={() => setToMenu((prev) => !prev)}
          changeValue={onChangeToValue}
        />
      </header>
      <div className="app__time"></div>
    </div>
  )
}

export default App
