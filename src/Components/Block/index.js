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
    changeFlag,
    flag,
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
          <img className="block__select-flag" src={flag} alt="Flag" />
          {value}
        </button>
      </div>
      {error && (
        <span style={{ color: 'red', fontSize: '11px' }}>
          The value cannot be less than zero!
        </span>
      )}
      {menu && (
        <Menu
          setMenu={setMenu}
          changeFlag={changeFlag}
          changeValue={changeValue}
        />
      )}
    </div>
  )
}

export default Block
