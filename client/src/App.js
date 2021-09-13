import { Button, Switch } from "antd";
import i18next from "i18next";
import React from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import Text from "./components/test";

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState();
  const { switcher, currentTheme, themes } = useThemeSwitcher();

  const toggleTheme = (isChecked) => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  return (
    <div>
      <Button onClick={() => i18next.changeLanguage("vi")}>Vi</Button>
      <Button onClick={() => i18next.changeLanguage("en")}>En</Button>
      <Text />

      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
}

export default App;
