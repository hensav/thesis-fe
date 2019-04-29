import React from "react"
const css = require("./WideButton.scss")

export const RoundButton = props => (
  <div className={"WideButton__wrapper"}>
    <div>
      <button
        className ={"WideButton__button"}
        onClick={props.callback}
        style={props.active ? {background: '#f4f4f4'} : null}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  </div>
)

export default RoundButton