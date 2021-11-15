import React from 'react';
import './InputEl.css';


class InputEl extends React.Component {
    constructor(props) {
        super(props);
        
        this._isEmpty = true;
        this._isValid = false;

        this._regPatternIllegal = null;
        this._regPatternLegal = null;        

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    validateIllegal(val) {
        if(val.match(this._regPatternIllegal)) {
            this._isValid = false;
        } else {
            this._isValid = true;
        }
    }

    validateLegal(val) {
        if(this._regPatternLegal.test(val)) {
            this._isValid = true;
        } else {
            this._isValid = false;
        }

        this.props.callback(this._isValid);
    }

    
    handleChange(e) {
        if(e.target.value === '') {
            this._isEmpty = true;
            this._isValid = false;
        } else {
            this._isEmpty = false;
            this.validateIllegal(e.target.value);
        }

        this.props.callback(this._isValid);
        //console.log('change');
    }

    handleBlur(e) {
        this.validateLegal(e.target.value);
    }

    render() {
        let errorMessageVisibility = 'hidden';
        if(!this._isEmpty && !this._isValid) {
            errorMessageVisibility = 'visible';
        }
        return (
            <div className={'field'}>
            <label>
                {this.props.label}
                <input type={'text'} onChange={this.handleChange} 
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