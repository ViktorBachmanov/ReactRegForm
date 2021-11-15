import InputEl from './InputEl.js';
import './InputEl.css';


class InputElTel extends InputEl {
    constructor(props) {
        super(props);

        this._regPatternIllegal = /[^+()\-0-9]|(.*\d.*){12,}/;
        //this._regPatternIllegal = /\d{3,}/;
        this._regPatternLegal = /[0-9]/;
    }

    
   
}

export default InputElTel;