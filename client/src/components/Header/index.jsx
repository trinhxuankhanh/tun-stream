import { Col, Row } from "antd"
import React from "react"
import Logo from "../Logo"
import SwitchDartMode from "../SwitchDartMode/Switch"

const Header = () => {
  return (
    <Row align='middle'>
      <Col>
        <Logo />
      </Col>

      <Col>
        <SwitchDartMode />
      </Col>
    </Row>
  )
}

export default Header
