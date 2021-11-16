import React from 'react';
import './InputEl.css';
import './InputElSelect.css';


class InputElSelect extends React.Component {
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
            <div className={'field'} style={{position: 'relative'}}>
                <label>{this.props.label}
                    <div tabIndex='0' onFocus={this.handleClick} className='selectDiv'>
                        <div id='select_value' className='placeholder'>Язык</div>
                        <img src='/pics/dropdown.svg' style={{float: 'right', margin: '11px'}} />
                    </div>
                </label>

                <ul id={'lang_list'} className={'dropList'}>
                    <li>Русский</li>
                    <li>Английский</li>
                    <li>Китайский</li>
                    <li>Испанский</li>
                </ul>
            </div>
        );
    }

}



export default InputElSelect;