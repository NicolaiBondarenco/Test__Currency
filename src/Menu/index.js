import React from 'react'
import './index.css'

const curValue = ['USD', 'UAH', 'EUR', 'RUB']

const Menu = (props) => {
  const { changeValue, setMenu } = props

  const chooseCurrency = (el) => {
    changeValue(el)
    setMenu()
  }

  return (
    <div className="menu">
      {curValue.map((el, id) => {
        return (
          <div
            className="menu__item"
            key={id}
            onClick={() => chooseCurrency(el)}
          >
            {el}
          </div>
        )
      })}
    </div>
  )
}

export default Menu
