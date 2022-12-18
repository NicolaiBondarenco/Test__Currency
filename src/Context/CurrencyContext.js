import React, { useState, useEffect, useRef, createContext } from 'react'

export const CurrencyContext = createContext({
  fromCurrency: 1,
  toCurrency: 0,
  fromError: false,
  toError: false,
  updateTime: '',
  fromValue: 'USD',
  toValue: 'UAH',
})

const CurrencyContextInner = ({ children }) => {
  const stateRef = useRef({})
  const [updateTime, setUpdateTime] = useState('')
  const [fromValue, setFromValue] = useState('USD')
  const [toValue, setToValue] = useState('UAH')
  const [fromCurrency, setFromCurrency] = useState(1)
  const [toCurrency, setToCurrency] = useState(0)
  const [fromError, setFromError] = useState(false)
  const [toError, setToError] = useState(false)

  useEffect(() => {
    fetch(
      'https://api.currencyapi.com/v3/latest?apikey=LHrgYEI23h2NUS75AvplApbHYiYRbJAtKQCixJ1k',
    )
      .then((res) => res.json())
      .then((body) => {
        stateRef.current = body.data
        setUpdateTime(
          body.meta.last_updated_at
            .split('T')[0]
            .split('-')
            .reverse()
            .join('.'),
        )
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
    }
    setFromError(false)
    const res =
      (stateRef.current[toValue].value / stateRef.current[fromValue].value) * v
    setToCurrency(res.toFixed(3))
    setFromCurrency(v)
  }

  const onChangeToCurrency = (v) => {
    if (v < 0) {
      return setToError(true)
    }
    setToError(false)
    const res =
      (stateRef.current[fromValue].value / stateRef.current[toValue].value) * v
    setFromCurrency(res.toFixed(3))
    setToCurrency(v)
  }

  return (
    <CurrencyContext.Provider
      value={{
        fromCurrency,
        toCurrency,
        fromError,
        toError,
        updateTime,
        fromValue,
        toValue,
        onChangeFromValue,
        onChangeToValue,
        onChangeFromCurrency,
        onChangeToCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyContextInner
