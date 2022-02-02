import React from "react";
import { elNames } from "./config.js";
import InputText from "./InputText.js";
import InputTextTel from "./InputTextTel.js";
import InputSelect from "./InputSelect.js";
import InputCheck from "./InputCheck.js";
import InputSubmit from "./InputSubmit.js";
import "./Regform.css";

class Regform extends React.Component {
  constructor() {
    super();

    this.state = {
      isValid: {
        [elNames.userName]: false,
        [elNames.email]: false,
        [elNames.tel]: false,
        [elNames.lang]: false,
        [elNames.agree]: false,
      },
    };
  }

  get isValid() {
    return (
      this.state.isValid[elNames.userName] &&
      this.state.isValid[elNames.email] &&
      this.state.isValid[elNames.tel] &&
      this.state.isValid[elNames.lang] &&
      this.state.isValid[elNames.agree]
    );
  }

  setValid(elName) {
    return (val) => {
      this.setState((prevState) => {
        return {
          isValid: { ...prevState.isValid, [elName]: val },
        };
      });
    };
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <form>
          <div id="header">Регистрация</div>
          <div id="login">
            Уже есть аккаунт?
            <a href="##" style={{ marginLeft: "6px" }}>
              Войти
            </a>
          </div>

          <InputText
            label="Имя"
            placeholder="Введите Ваше имя"
            isValid={this.state.isValid[elNames.userName]}
            setValid={this.setValid(elNames.userName)}
            regexPattern={/^[-\sA-ZА-ЯЁ]+$/i}
          />
          <InputText
            label="Email"
            placeholder="Введите Ваш email"
            isValid={this.state.isValid[elNames.email]}
            setValid={this.setValid(elNames.email)}
            regexPattern={
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([-a-z0-9]+\.)+[a-z]{2,}))$/i
            }
          />
          <InputTextTel
            label="Номер телефона"
            placeholder="Введите номер телефона"
            isValid={this.state.isValid[elNames.tel]}
            setValid={this.setValid(elNames.tel)}
            regexPattern={/^\+?[()-\d]*$/}
          />

          <InputSelect
            label="Язык"
            placeholder="Язык"
            isValid={this.state.isValid[elNames.lang]}
            setValid={this.setValid(elNames.lang)}
          />

          <InputCheck
            isChecked={this.state.isValid[elNames.agree]}
            setValid={this.setValid(elNames.agree)}
          />

          <InputSubmit isValid={this.isValid} />
        </form>
      </div>
    );
  }
}

export default Regform;
