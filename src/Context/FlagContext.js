import React, { useState, createContext } from 'react'

export const FlagContext = createContext({
  fromFlag: 'https://yastatic.net/s3/frontend/country-flag/_/2FHekp7b.svg',
  toFlag: 'https://yastatic.net/s3/frontend/country-flag/_/3RhtaDZK.svg',
})

const FlagContextInner = ({ children }) => {
  const [fromFlag, setFromFlag] = useState(
    'https://yastatic.net/s3/frontend/country-flag/_/2FHekp7b.svg',
  )
  const [toFlag, setToFlag] = useState(
    'https://yastatic.net/s3/frontend/country-flag/_/3RhtaDZK.svg',
  )

  const changeFromFlag = (flag) => {
    setFromFlag(flag)
  }

  const changeToFlag = (flag) => {
    setToFlag(flag)
  }

  return (
    <FlagContext.Provider
      value={{ fromFlag, toFlag, changeFromFlag, changeToFlag }}
    >
      {children}
    </FlagContext.Provider>
  )
}

export default FlagContextInner
