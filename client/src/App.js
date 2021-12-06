import React, { useEffect, useState } from "react"
import { useThemeSwitcher } from "react-css-theme-switcher"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import categoryApi from "./api/categoryApi"
import "./App.css"
import BackToTop from "./components/BackToTop"
import ButtonCustom from "./components/Button/index"
import Header from "./components/Header/index"
import LayoutMenu from "./components/LayoutRoute"
import Text from "./components/Text"
import Toast from "./components/Toast"
import { checkObjectEmpty } from "./provider/object"
import router from "./router"

function App() {
  const { currentTheme } = useThemeSwitcher()
  const queryClient = useQueryClient()
  const query = useQuery("todos", categoryApi.getAll)
  const [data, setData] = useState({})
  const mutation = useMutation(categoryApi.creat, {
    onSuccess: () => queryClient.invalidateQueries("todos"),
  })

  const routers = useRoutes([...router])

  useEffect(() => {
    categoryApi.getAllById().then(result => setData(result))
  }, [])

  return (
    <div>
      <Text id='title' variant='h2' />

      <p>{!checkObjectEmpty(data) && data.khanh}</p>

      <Toast
        content={<Text id='title' variant='h2' type={false} />}
        theme={currentTheme}
        type='success'
      />
      <ul>{query.data?.length > 0 && query.data.map(todo => <li key={todo}>{todo}</li>)}</ul>

      <ButtonCustom
        component='btn'
        classStyle='btn--bubble'
        onClick={() => {
          mutation.mutate("4")
        }}
      >
        Add
      </ButtonCustom>
      <ToastContainer />
      <BackToTop />

      <Header />

      <ButtonCustom component='btn' classStyle='btn--bubble'>
        Hello
      </ButtonCustom>
      <ButtonCustom component='btn' classStyle='btn--side'>
        Hello
      </ButtonCustom>

      <LayoutMenu />
      {routers}
    </div>
  )
}

export default App
