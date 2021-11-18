import InputEl from './InputEl.js';
import './InputEl.css';


class InputElEmail extends InputEl {
    constructor(props) {
        super(props);
        /*
        this._regPatternIllegal = /\s/;
        this._regPatternLegal = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        */
        this._regexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([-a-z0-9]+\.)+[a-z]{2,}))$/i;
    }

   
}

export default InputElEmail;