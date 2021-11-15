import React from 'react';
import InputElName from './InputElName.js';
import InputElEmail from './InputElEmail.js';
import InputElCheck from './InputElCheck.js';
import './Regform.css';


class Regform extends React.Component {

    constructor() {
        super();
        
        this.state = {
            isValid: [false, false, false, false]            
        };

        this.modifyFieldsValid = this.modifyFieldsValid.bind(this);

    }

    get isValid() {
        return this.state.isValid[0] && this.state.isValid[1] && this.state.isValid[2];
    }

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
    }


    render() {
        
        return <form onSubmit={() => { console.log("submit") }}>
                
                <InputElName label='Имя' callback={this.modifyFieldsValid(0)}/>
                <InputElEmail label='Email' callback={this.modifyFieldsValid(1)}/>
                <InputElCheck callback={this.modifyFieldsValid(2)}/>

                 <input type='submit' value='Зарегистрироваться'
                    disabled={this.isValid ? false : true}
                 />
                 
               </form>
    }

}


export default Regform;