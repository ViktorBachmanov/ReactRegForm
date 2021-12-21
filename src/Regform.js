import React from 'react';
import InputText from './InputText.js';
import InputTextTel from './InputTextTel.js';
import InputSelect from './InputSelect.js';
import InputCheck from './InputCheck.js';
import InputSubmit from './InputSubmit.js';
import './Regform.css';

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { USER_NAME, EMAIL, TEL, LANG, AGREE } from "./config";



function Regform() {

    
    const isInputsValid = useSelector(state => {
        return state.isValid;
    });

    const dispatch = useDispatch();

   
    function isValid() {
        return isInputsValid[USER_NAME] &&
               isInputsValid[EMAIL] &&
               isInputsValid[TEL] &&
               isInputsValid[LANG] &&
               isInputsValid[AGREE];
    }

    function setValid(elName) {
        return (val) => {
            dispatch({
                type: 'SET_VALID',
                payload: {
                    elName,
                    isValid: val
                }
            })
        }
    }
    
    
    return (
        <div style={{width: '100%'}}>
        <form>
            <div id='header'>Регистрация</div>
            <div id='login'>
                Уже есть аккаунт?
                <a href='##' style={{marginLeft: '6px'}}>Войти</a>
            </div>
            
            <InputText
                label='Имя' 
                placeholder='Введите Ваше имя' 
                isValid={isInputsValid[USER_NAME]}
                setValid={setValid(USER_NAME)}
                regexPattern={/^[-\sA-ZА-ЯЁ]+$/i}
            />
            <InputText 
                label='Email' 
                placeholder='Введите Ваш email' 
                isValid={isInputsValid[EMAIL]}
                setValid={setValid(EMAIL)}
                regexPattern={/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([-a-z0-9]+\.)+[a-z]{2,}))$/i}
            />
            <InputTextTel 
                label='Номер телефона' 
                placeholder='Введите номер телефона' 
                isValid={isInputsValid[TEL]}
                setValid={setValid(TEL)}
                regexPattern={/^\+?[()-\d]*$/}
            />

            <InputSelect 
                label='Язык'
                placeholder='Язык'
                isValid={isInputsValid[LANG]}
                setValid={setValid(LANG)}
            />

            <InputCheck 
                isChecked={isInputsValid[AGREE]}
                setValid={setValid(AGREE)}
            />

            <InputSubmit isValid={isValid}/>
            
        </form>
        </div>
    )
    

}


export default Regform;