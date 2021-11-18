import InputEl from './InputEl.js';
import './InputEl.css';


class InputElName extends InputEl {
    constructor(props) {
        super(props);
        /*
        this._regPatternIllegal = /[0-9]/;
        this._regPatternLegal = /[^0-9]/;*/
        this._regexPattern = /^[-\sA-ZА-ЯЁ]+$/i;
    }

    
   
}

export default InputElName;