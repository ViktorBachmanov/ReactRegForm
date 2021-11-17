import React from 'react';
import './InputEl.css';


class InputEl extends React.Component {
    constructor(props) {
        super(props);
        
        this._isEmpty = true;
        //this.isValid = false;

        this.state = {
            isValid: false            
        };

        this._regPatternIllegal = null;
        this._regPatternLegal = null;        

        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    get isValid() {
        return this.state.isValid;
    }

    set isValid(val) {
        if(this.isValid === val)
            return;

        this.state.isValid = val;

        this.setState({
            isValid: val
        });

        console.log(`val: ${val}`);
        console.log(`state.isValid: ${this.isValid}`);

        this.props.updateFormState();
    }

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
    }

    
    handleChange(e) {
        if(e.target.value === '') {
            this._isEmpty = true;
            this.isValid = false;
        } else {
            this._isEmpty = false;
            this.validateIllegal(e.target.value);
        }

        //this.props.callback(this.isValid);
    }

    handleBlur(e) {
        //console.log(`handleBlur: ${e.target.value}`);
        //this.validateLegal(e.target.value);
    }

    render() {
        console.log('render InputEl');
        let errorMessageVisibility = 'hidden';
        if(!this._isEmpty && !this.isValid) {
            errorMessageVisibility = 'visible';
        }
        return (
            <div className={'field'}>
            <label>
                {this.props.label}
                <input type={'text'} placeholder={this.props.placeholder}
                        onChange={this.handleChange} 
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