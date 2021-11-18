import InputEl from './InputEl.js';


class InputElTel extends InputEl {
       
    validate(str) {
        let rslt1 = /^\+?[()-\d]*/.test(str);
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