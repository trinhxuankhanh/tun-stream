import React, { useState } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import "./style.css"

const SwitchDartMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const { switcher, themes } = useThemeSwitcher()

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked)
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }
  return (
    <div class='switch'>
      <input
        type='checkbox'
        class='switch__input'
        id='Switch'
        value={isDarkMode}
        onChange={e => toggleTheme(!e.target.checked)}
      />
      <label class='switch__label' for='Switch'>
        <span class='switch__indicator'></span>
        <span class='switch__decoration'></span>
      </label>
    </div>
  )
}

export default SwitchDartMode
