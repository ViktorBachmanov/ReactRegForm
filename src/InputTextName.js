import InputText from './InputText.js';


class InputTextName extends InputText {
    constructor(props) {
        super(props);
      
        this._regexPattern = /^[-\sA-ZА-ЯЁ]+$/i;
    }

    
   
}

export default InputTextName;