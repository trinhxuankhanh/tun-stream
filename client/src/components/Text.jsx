import React from "react"
import { withTranslation } from "react-i18next"
import Typography from "@mui/material/Typography"

const Text = ({ t, type = true, id, ...rest }) => {
  return type ? <Typography {...rest}>{t(id)}</Typography> : `${t(id)}`
}

export default withTranslation()(Text)
