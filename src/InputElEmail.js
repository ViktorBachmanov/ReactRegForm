import InputEl from './InputEl.js';
import './InputEl.css';


class InputElEmail extends InputEl {
    constructor(props) {
        super(props);

        this._regPatternIllegal = /\s/;
        this._regPatternLegal = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    }

   
}

export default InputElEmail;