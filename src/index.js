import React from 'react'
import ReactDOM from 'react-dom/client'
import FlagContextInner from './Context/FlagContext'
import MenuContextInner from './Context/MenuContext'
import CurrencyContextInner from './Context/CurrencyContext'
import ThemeContextInner from './Context/ThemeContext'
import App from './Components/App/App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeContextInner>
    <CurrencyContextInner>
      <FlagContextInner>
        <MenuContextInner>
          <App />
        </MenuContextInner>
      </FlagContextInner>
    </CurrencyContextInner>
  </ThemeContextInner>,
)
