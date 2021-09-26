import React from "react"
import { withTranslation } from "react-i18next"
import { Typography } from "antd"

const { Paragraph } = Typography

const Text = ({ t, type = true, id }) => {
  return type ? <Paragraph>{t(id)}</Paragraph> : `${t(id)}`
}

export default withTranslation()(Text)
