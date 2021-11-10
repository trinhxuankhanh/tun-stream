import i18next from "i18next"
import React, { useEffect, useState } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { ToastContainer } from "react-toastify"
import categoryApi from "./api/categoryApi"
import BackToTop from "./components/BackToTop"
import Header from "./components/Header/index"
import Text from "./components/Text"
import Toast from "./components/Toast"
import { checkObjectEmpty } from "./provider/object"
import ButtonCustom from "./components/Button/index"

function App() {
  const { currentTheme } = useThemeSwitcher()
  const queryClient = useQueryClient()
  const query = useQuery("todos", categoryApi.getAll)
  const [data, setData] = useState({})
  const mutation = useMutation(categoryApi.creat, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  })

  useEffect(() => {
    categoryApi.getAllById().then(result => setData(result))
  }, [])

  return (
    <div>
      <ButtonCustom component="btn" classStyle="btn--bubble" onClick={() => i18next.changeLanguage("vi")}>Vi</ButtonCustom>
      <ButtonCustom component="btn" classStyle="btn--bubble" onClick={() => i18next.changeLanguage("en")}>En</ButtonCustom>

      <Text id='title' />

      <p>{!checkObjectEmpty(data) && data.khanh}</p>

      <Toast content={<Text id='title' type={false} />} theme={currentTheme} type='success' />
      <ul>{query.data?.length > 0 && query.data.map(todo => <li key={todo}>{todo}</li>)}</ul>

      <ButtonCustom
      component="btn"
      classStyle="btn--bubble"
        onClick={() => {
          mutation.mutate("4")
        }}
      >
        Add
      </ButtonCustom>
      <ToastContainer />
      <BackToTop />

      <Header />

      <ButtonCustom component="btn" classStyle="btn--bubble">Hello</ButtonCustom>
      <ButtonCustom component="btn" classStyle="btn--side">Hello</ButtonCustom>
    </div>
  )
}

export default App
