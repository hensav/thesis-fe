import React from "react"
const css = require("./RoundButton.scss")

export const RoundButton = props => (
    <div className={"RoundButton__wrapper"}>
      <div>
        <button
          className ={"RoundButton__button"}
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