import React from 'react';
import './InputEl.css';


class InputEl extends React.Component {
    constructor(props) {
        super(props);
        
        this._isEmpty = true;
        //this.isValid = false;

        this.state = {
            isValid: false,
            isFocus: false           
        };
        /*
        this._regPatternIllegal = null;
        this._regPatternLegal = null;   */
        this._regexPattern = null;     

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    get isValid() {
        return this.state.isValid;
    }

    set isValid(val) {
        /*if(this.isValid === val)
            return;*/

        //this.state.isValid = val;

        this.setState({
            isValid: val
        });

        console.log(`val: ${val}`);
        console.log(`state.isValid: ${this.isValid}`);

        this.props.updateSubmit();
    }

    get isFocus() {
        return this.state.isFocus;
    }
    /*
    validateIllegal(val) {
        if(val.match(this._regPatternIllegal)) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }
    }
    
    validateLegal(val) {
        if(this._regPatternLegal.test(val)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }

        //this.props.callback(this.isValid);
    }*/

    validate(str) {
        //this._isEmpty = str === '' ? true : false;
        
        if(this._regexPattern.test(str)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }

    handleChange(e) {
        if(e.target.value === '') {
            this._isEmpty = true;
            this.isValid = false;
        } else {
            this._isEmpty = false;
            this.validate(e.target.value);
        }

        //this.props.callback(this.isValid);
    }

    handleFocus() {
        this.setState({
            isFocus: true
        });
    }

    handleBlur(e) {
        //console.log(`handleBlur: ${e.target.value}`);
        //this.validateLegal(e.target.value);
        this.setState({
            isFocus: false
        });
        this.validate(e.target.value);
    }

    render() {
        console.log('render InputEl');
        let errorMessageVisibility = 'hidden';
        if(!this._isEmpty && !this.isValid && !this.isFocus) {
            errorMessageVisibility = 'visible';
        }
        return (
            <div className={'field'}>
            <label>
                {this.props.label}
                <input type={'text'} placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus} 
                        onBlur={this.handleBlur}/>
                <span className='errorMessage' style={{visibility: errorMessageVisibility}}>
                    Введено некорректное значение
                </span>
            </label>
            </div>
        );
    }

}

export default InputEl;