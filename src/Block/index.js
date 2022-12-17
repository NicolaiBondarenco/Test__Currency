import React from 'react'
import Menu from '../Menu'
import './index.css'

const Block = (props) => {
  const {
    value,
    changeValue,
    menu,
    setMenu,
    currency,
    changeCurrency,
    error,
  } = props

  return (
    <div className="block">
      <div className="block__inner">
        <input
          className="block__value"
          value={currency || ''}
          onChange={(e) => changeCurrency(e.target.value)}
          type="number"
          placeholder="0"
        />
        <button className="block__select" onClick={setMenu}>
          {value}
        </button>
      </div>
      {error && (
        <span style={{ color: 'red' }}>
          Значение не может быть меньше нуля!
        </span>
      )}
      {menu && <Menu setMenu={setMenu} changeValue={changeValue} />}
    </div>
  )
}

export default Block
