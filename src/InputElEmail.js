import InputEl from './InputEl.js';


class InputElEmail extends InputEl {
    constructor(props) {
        super(props);
      
        this._regexPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([-a-z0-9]+\.)+[a-z]{2,}))$/i;
    }

   
}

export default InputElEmail;