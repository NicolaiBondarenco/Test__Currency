import React, { useContext } from 'react'
import { FlagContext } from '../../Context/FlagContext'
import { MenuContext } from '../../Context/MenuContext'
import { CurrencyContext } from '../../Context/CurrencyContext'
import LastUpdate from '../LastUpdate/LastUpdate'
import Block from '../Block'
import Theme from '../Theme/Theme'
import './App.css'

const App = () => {
  const { fromFlag, toFlag, changeFromFlag, changeToFlag } = useContext(
    FlagContext,
  )
  const { fromMenu, toMenu, changeFromMenu, changeToMenu } = useContext(
    MenuContext,
  )
  const {
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
  } = useContext(CurrencyContext)

  return (
    <div className="app">
      <header className="header">
        <Block
          flag={fromFlag}
          changeFlag={changeFromFlag}
          error={fromError}
          currency={fromCurrency}
          changeCurrency={onChangeFromCurrency}
          value={fromValue}
          menu={fromMenu}
          setMenu={changeFromMenu}
          changeValue={onChangeFromValue}
        />
        <Block
          flag={toFlag}
          changeFlag={changeToFlag}
          error={toError}
          currency={toCurrency}
          changeCurrency={onChangeToCurrency}
          value={toValue}
          menu={toMenu}
          setMenu={changeToMenu}
          changeValue={onChangeToValue}
        />
      </header>
      <div className="wrapper">
        <LastUpdate updateTime={updateTime} />
        <Theme />
      </div>
    </div>
  )
}

export default App
