import React from 'react';


class InputText extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this._isEmpty = true;
        
        this.state = {
            isFocus: false           
        };
       
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    get isValid() {
        return this.props.isValid;
    }

    set isValid(val) {        
        this.props.setValid(val);
    }

    get isFocus() {
        return this.state.isFocus;
    }
   
    validate(str) {        
        if(this.props.regexPattern.test(str)) {
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

    }

    handleFocus() {
        this.setState({
            isFocus: true
        });
    }

    handleBlur(e) {
        this.setState({
            isFocus: false
        });
        this.validate(e.target.value);
    }

    render() {
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

export default InputText;