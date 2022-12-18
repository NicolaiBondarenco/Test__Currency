import React, { createContext, useState } from 'react'

export const ThemeContext = createContext({
  theme: false,
  onChangeTheme: () => {},
})

const ThemeContextInner = ({ children }) => {
  const [theme, setTheme] = useState(false)

  const onChangeTheme = () => setTheme(!theme)
  return (
    <ThemeContext.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextInner
