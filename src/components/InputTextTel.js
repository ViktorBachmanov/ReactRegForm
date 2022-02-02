import InputText from "./InputText.js";

class InputTextTel extends InputText {
  validate(str) {
    let rslt1 = this.props.regexPattern.test(str);
    let digitsArr = str.match(/\d/g);
    let totalDigits;
    if (digitsArr) totalDigits = digitsArr.length;

    if (rslt1 && totalDigits === 11) {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}

export default InputTextTel;
