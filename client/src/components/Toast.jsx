import { Button } from "antd"
import React from "react"
import { toast } from "react-toastify"

const Toast = ({ content, theme, type }) => {
  const notify = () => {
    switch (type) {
      case "success":
        return toast.success(content, { theme })
      case "error":
        return toast.error(content, { theme })
      case "warn":
        return toast.warn(content, { theme })
      case "info":
        return toast.info(content, { theme })
      default:
        return toast(content, { theme })
    }
  }
  return <Button onClick={notify}>Notify !</Button>
}

export default Toast
