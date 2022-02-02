import React from "react";

class InputCheck extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  get isChecked() {
    return this.props.isChecked;
  }

  set isChecked(val) {
    this.props.setValid(val);
  }

  get isValid() {
    return this.isChecked;
  }

  handleChange() {
    this.isChecked = !this.props.isChecked;
  }

  render() {
    let checkMark = this.isChecked ? "visible" : "hidden";
    let classNames = this.isChecked ? "checked" : "";

    return (
      <div id="agree_field">
        <div id="check_box" onClick={this.handleChange} className={classNames}>
          <img
            id="check_mark"
            src="/pics/check-mark.svg"
            style={{ visibility: checkMark }}
            alt="v"
          />
        </div>

        <div style={{ marginLeft: "8px" }}>
          Принимаю <a href="##">условия</a> использования
        </div>
      </div>
    );
  }
}

export default InputCheck;
