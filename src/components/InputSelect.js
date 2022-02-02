import React from "react";

class InputSelect extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isOpen: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  get isValid() {
    return this.props.isValid;
  }

  handleFocus() {
    this.setState({
      isOpen: true,
    });
  }

  handleBlur() {
    this.setState({
      isOpen: false,
    });
  }

  handleSelect(e) {
    this.setState({
      value: e.target.textContent,
      isOpen: false,
    });

    this.props.setValid(true);
  }

  render() {
    let displayVal = this.state.isOpen ? "block" : "none";

    return (
      <div className={"field"} style={{ position: "relative" }}>
        <label>
          {this.props.label}
          <input
            type={"text"}
            readOnly
            style={{ cursor: "default" }}
            value={this.state.value}
            placeholder={this.props.placeholder}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
          />
        </label>

        <img
          src="/pics/dropdown.svg"
          style={{ position: "absolute", right: "11px", top: "40px" }}
          alt="v"
        />

        <ul
          id="drop_list"
          onMouseDown={this.handleSelect}
          style={{ display: displayVal }}
        >
          <li>Русский</li>
          <li>Английский</li>
          <li>Китайский</li>
          <li>Испанский</li>
        </ul>
      </div>
    );
  }
}

export default InputSelect;
