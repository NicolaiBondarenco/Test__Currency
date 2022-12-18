import React from 'react'
import './index.css'

const curValue = [
  {
    currency: 'USD',
    flag: 'https://yastatic.net/s3/frontend/country-flag/_/2FHekp7b.svg',
  },
  {
    currency: 'UAH',
    flag: 'https://yastatic.net/s3/frontend/country-flag/_/3RhtaDZK.svg',
  },
  {
    currency: 'EUR',
    flag: 'https://yastatic.net/s3/frontend/country-flag/_/41CsfCf8.svg',
  },
  {
    currency: 'GBP',
    flag: 'https://yastatic.net/s3/frontend/country-flag/_/2ttmHdVZ.svg',
  },
]

const Menu = (props) => {
  const { changeValue, setMenu, changeFlag } = props

  const chooseCurrency = (el, flag) => {
    changeValue(el)
    changeFlag(flag)
    setMenu()
  }

  return (
    <div className="menu">
      {curValue.map(({ currency, flag }, id) => {
        return (
          <div
            className={'menu__item'}
            key={id}
            onClick={() => chooseCurrency(currency, flag)}
          >
            <img src={flag} alt="Flag" />
            <div>{currency}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Menu
