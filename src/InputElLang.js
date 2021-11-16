import React from 'react';
import './InputEl.css';


class InputElLang extends React.Component {
    constructor(props) {
        super(props);
        
        this._isSelected = false;

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    
    handleChange() {
        this.props.callback(true);
    }

    handleClick() {
        console.log('handleClick');
        let langList = document.getElementById('lang_list');
        langList.style.display = 'block';
    }

    render() {
        
        return (
            <div className={'field'}>
                <label>{this.props.label}
                     <input type={'text'} onFocus={this.handleClick} />
                </label>
            </div>
        );
    }

}

export default InputElLang;