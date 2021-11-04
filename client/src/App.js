import { Button, Switch } from "antd"
import i18next from "i18next"
import React, { useEffect, useState } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ToastContainer } from "react-toastify"
import categoryApi from "./api/categoryApi"
import BackToTop from "./components/BackToTop"
import Text from "./components/Text"
import Toast from "./components/Toast"
import { checkObjectEmpty } from "./provider/object"

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState()
  const { switcher, currentTheme, themes } = useThemeSwitcher()
  const queryClient = useQueryClient()
  const query = useQuery("todos", categoryApi.getAll)
  const [data, setData] = useState({})

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked)
    switcher({ theme: isChecked ? themes.dark : themes.light })
  }

  const mutation = useMutation(categoryApi.creat, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  })

  useEffect(() => {
    categoryApi.getAllById().then(result => setData(result))
  }, [])

  return (
    <div>
      <Button onClick={() => i18next.changeLanguage("vi")}>Vi</Button>
      <Button onClick={() => i18next.changeLanguage("en")}>En</Button>

      <Text id='title' />

      <p>{! checkObjectEmpty(data) && data.khanh}</p>

      <h1>The current theme is: {currentTheme}</h1>
      <Switch checked={isDarkMode} onChange={toggleTheme} />

      <Toast content={<Text id='title' type={false} />} theme={currentTheme} type='success' />
      <ul>{query.data?.length > 0 && query.data.map(todo => <li key={todo}>{todo}</li>)}</ul>

      <Button
        onClick={() => {
          mutation.mutate("4")
        }}
      >
        Add
      </Button>
      <ToastContainer />
      <BackToTop />
    </div>
  )
}

export default App
