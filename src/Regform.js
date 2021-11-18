import React from 'react';
import InputElName from './InputElName.js';
import InputElEmail from './InputElEmail.js';
import InputElTel from './InputElTel.js';
import InputElSelect from './InputElSelect.js';
import InputElCheck from './InputElCheck.js';
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
                
                <InputElName ref={this.nameComp} label='Имя' placeholder='Введите Ваше имя' updateSubmit={this.updateSubmit}/>
                <InputElEmail ref={this.emailComp} label='Email' placeholder='Введите Ваш email' updateSubmit={this.updateSubmit}/>
                <InputElTel ref={this.telComp} label='Номер телефона' placeholder='Введите номер телефона' updateSubmit={this.updateSubmit}/>
                <InputElSelect ref={this.selectComp} label='Язык' placeholder='Язык' updateSubmit={this.updateSubmit}/>

                <InputElCheck ref={this.checkComp}  updateSubmit={this.updateSubmit}/>

                <InputSubmit ref={this.submitComp} isValid={this.isValid}/>
                
            </form>
            </div>
        )
    }

}


export default Regform;