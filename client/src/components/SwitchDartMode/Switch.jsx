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
    <div className='switch'>
      <input
        type='checkbox'
        className='switch__input'
        id='Switch'
        value={isDarkMode}
        onChange={e => toggleTheme(!e.target.checked)}
      />
      <label className='switch__label' htmlFor='Switch'>
        <span className='switch__indicator'></span>
        <span className='switch__decoration'></span>
      </label>
    </div>
  )
}

export default SwitchDartMode
