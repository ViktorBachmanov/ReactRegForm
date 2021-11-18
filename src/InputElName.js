import InputEl from './InputEl.js';


class InputElName extends InputEl {
    constructor(props) {
        super(props);
      
        this._regexPattern = /^[-\sA-ZА-ЯЁ]+$/i;
    }

    
   
}

export default InputElName;