import { Image, Space, Typography } from "antd"
import React from "react"
import logo from "../images/live-streaming.png"

const { Title } = Typography
const style = {
  "margin-0": {
    margin: "0",
  },
}

const Logo = () => (
  <Space size='middle'>
    <Image src={logo} width={50} height={50} alt='logo' preview={false} />

    <Title style={style["margin-0"]} level={2}>
      Tun's Stream
    </Title>
  </Space>
)

export default Logo
