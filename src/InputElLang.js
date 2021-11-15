import React from 'react';
import './InputEl.css';


class InputElLang extends React.Component {
    constructor(props) {
        super(props);
        
        this._isSelected = false;

        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange() {
        this.props.callback(true);
    }

    render() {
        
        return (
            <div className={'field'}>
                <label>{this.props.label}
                <select value={''} onChange={this.handleChange}>
                    <option value={''} disabled hidden>{this.props.label}</option>
                    <option value={'ru'}>Русский</option>
                    <option value={'en'}>Английский</option>
                </select>
                </label>
            </div>
        );
    }

}

export default InputElLang;