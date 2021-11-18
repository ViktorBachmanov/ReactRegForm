import InputEl from './InputEl.js';


class InputElTel extends InputEl {
    constructor(props) {
        super(props);
        /*
        this._regPatternIllegal = /[^+()\-0-9]|(.*\d.*){12,}/;
        //this._regPatternIllegal = /\d{3,}/;
        this._regPatternLegal = /[0-9]/;*/

        //this._regexPattern = /^\+?[-()](\d){4,4}/;
    }
    
    validate(str) {
        let rslt1 = /^\+?[()-\d]*/.test(str);
        //let rslt2 = /^(.*\d.*){4}$/.test(str);
        let digitsArr = str.match(/\d/g);
        let totalDigits;
        if(digitsArr)
            totalDigits = digitsArr.length;

   
        if(rslt1 && totalDigits === 11) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    
   
}

export default InputElTel;