import React, { Fragment } from "react"
import "./ButtonBubble/style.css"
import "./ButtonSide/style.css"
import "./style.css"


const ButtonCustom = ({ component = "btn", classStyle, href, children, onClick, ...rest }) => {
  return (
    <Fragment>
      {component === "a" ? (
        <a className={`btn ${classStyle}`} href={href} onClick={onClick} {...rest}>
          {children}
        </a>
      ) : (
        <button className={`btn ${classStyle}`} onClick={onClick} {...rest}>
          {children}
        </button>
      )}
    </Fragment>
  )
}

export default ButtonCustom
