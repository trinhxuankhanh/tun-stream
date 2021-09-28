import { Button, Switch } from "antd"
import i18next from "i18next"
import React from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import { ToastContainer } from "react-toastify"
import BackToTop from "./components/BackToTop"
import Text from "./components/Text"
import Toast from "./components/Toast"
import Header from './layouts/Header/Header'

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState()
  const { switcher, currentTheme, themes } = useThemeSwitcher()

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked)
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }

  return (
    <div>
      <Header />
      <Button onClick={() => i18next.changeLanguage("vi")}>Vi</Button>
      <Button onClick={() => i18next.changeLanguage("en")}>En</Button>

      <Text id='title' />

      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />

      <Toast content={<Text id='title' type={false} />} theme={currentTheme} type='success' />
      <ToastContainer />
      <BackToTop />
    </div>
  )
}

export default App
