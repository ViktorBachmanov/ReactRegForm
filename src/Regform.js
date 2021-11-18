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
        /*
        this.state = {
            isValid: [false, false, false, false, false]            
        };*/
        /*
        this.state = {
            count: 0
        };*/

        this.nameComp = React.createRef();
        this.emailComp = React.createRef();
        this.telComp = React.createRef();
        this.selectComp = React.createRef();
        this.checkComp = React.createRef();
        this.submitComp = React.createRef();


        //this.modifyFieldsValid = this.modifyFieldsValid.bind(this);
        //this.updateState = this.updateState.bind(this);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.isValid = this.isValid.bind(this);

    }

    updateSubmit() {
        this.submitComp.current.updateState();
    }
    /*
    updateState() {
        this.setState(prevState => {
                return {
                    count: ++prevState.count
                }
            }
        );
    }*/
    /*
    get isValid() {
        return this.state.isValid[0] && 
                this.state.isValid[1] && 
                this.state.isValid[2] &&
                this.state.isValid[3] &&
                this.state.isValid[4];
    }*/
    isValid() {
        console.log(`Regform isFormValid:`);

        if(!this.nameComp.current)
            return false;

        console.log(this.nameComp.current.isValid);
        console.log(this.emailComp.current.isValid);
        console.log(this.telComp.current.isValid);
        console.log(this.selectComp.current.isValid);
        console.log(this.checkComp.current.isValid);

        return this.nameComp.current.isValid && 
                this.emailComp.current.isValid && 
                this.telComp.current.isValid &&
                this.selectComp.current.isValid &&
                this.checkComp.current.isValid;
    }
    /*
    modifyFieldsValid(index) {
        return (val) => {
            this.setState(prevState => {
                let arr = prevState.isValid.slice();
                
                arr.splice(index, 1, val);
                
                return {
                    isValid: arr
                };
            });
        }
    }*/


    render() {
        console.log('render Regform');
        return (
            <div style={{width: '100%'}}>
            <form onSubmit={() => { console.log("submit") }}>
                <div id='header'>Регистрация</div>
                <div id='login'>
                    Уже есть аккаунт?&nbsp;&nbsp;
                    <a href='##'>Войти</a>
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