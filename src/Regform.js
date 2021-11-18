import React from 'react';
import InputTextName from './InputTextName.js';
import InputTextEmail from './InputTextEmail.js';
import InputTextTel from './InputTextTel.js';
import InputSelect from './InputSelect.js';
import InputCheck from './InputCheck.js';
import InputSubmit from './InputSubmit.js';
import './Regform.css';


class Regform extends React.Component {

    constructor() {
        super();
       
        this.nameComp = React.createRef();
        this.emailComp = React.createRef();
        this.telComp = React.createRef();
        this.selectComp = React.createRef();
        this.checkComp = React.createRef();
        this.submitComp = React.createRef();

        this.updateSubmit = this.updateSubmit.bind(this);
        this.isValid = this.isValid.bind(this);

    }

    updateSubmit() {
        this.submitComp.current.updateState();
    }
   
    isValid() {

        if(!this.nameComp.current)
            return false;

        return this.nameComp.current.isValid && 
                this.emailComp.current.isValid && 
                this.telComp.current.isValid &&
                this.selectComp.current.isValid &&
                this.checkComp.current.isValid;
    }
    
    render() {
        return (
            <div style={{width: '100%'}}>
            <form>
                <div id='header'>Регистрация</div>
                <div id='login'>
                    Уже есть аккаунт?
                    <a href='##' style={{marginLeft: '6px'}}>Войти</a>
                </div>
                
                <InputTextName ref={this.nameComp} label='Имя' placeholder='Введите Ваше имя' updateSubmit={this.updateSubmit}/>
                <InputTextEmail ref={this.emailComp} label='Email' placeholder='Введите Ваш email' updateSubmit={this.updateSubmit}/>
                <InputTextTel ref={this.telComp} label='Номер телефона' placeholder='Введите номер телефона' updateSubmit={this.updateSubmit}/>
                <InputSelect ref={this.selectComp} label='Язык' placeholder='Язык' updateSubmit={this.updateSubmit}/>

                <InputCheck ref={this.checkComp}  updateSubmit={this.updateSubmit}/>

                <InputSubmit ref={this.submitComp} isValid={this.isValid}/>
                
            </form>
            </div>
        )
    }

}


export default Regform;