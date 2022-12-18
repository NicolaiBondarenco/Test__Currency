import React, { useState, createContext } from 'react'

export const MenuContext = createContext({
  fromMenu: false,
  toMenu: false,
})

const MenuContextInner = ({ children }) => {
  const [fromMenu, setFromMenu] = useState(false)
  const [toMenu, setToMenu] = useState(false)

  const changeFromMenu = () => {
    setFromMenu((prev) => !prev)
  }

  const changeToMenu = () => {
    setToMenu((prev) => !prev)
  }

  return (
    <MenuContext.Provider
      value={{
        fromMenu,
        toMenu,
        changeFromMenu,
        changeToMenu,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContextInner
