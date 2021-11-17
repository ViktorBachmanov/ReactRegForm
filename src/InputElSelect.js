import React from 'react';
import './InputEl.css';
import './InputElSelect.css';


class InputElSelect extends React.Component {
    constructor(props) {
        super(props);

        this._isSelected = false;

        this.selectEl = React.createRef();
        this.list = React.createRef();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    /*
    handleChange() {
        this.props.callback(true);
    }*/

    handleFocus() {
        /*let langList = document.getElementById('lang_list');
        langList.style.display = 'block';*/
        this.list.current.style.display = 'block';
    }

    handleBlur() {
        setTimeout(() => { 
            this.list.current.style.display = 'none';
        }, 250);        
    }

    handleSelect(e) {
        this.list.current.style.display = 'none';
        this.selectEl.current.value = e.target.textContent;
    }

    render() {        
        return (
            <div className={'field'} style={{position: 'relative'}}>
                                
                <label>
                    {this.props.label}
                    <input ref={this.selectEl} type={'text'} readOnly style={{cursor: 'default'}}
                            placeholder={this.props.placeholder}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}/>
                </label>

                <img src='/pics/dropdown.svg' style={{position: 'absolute', right: '11px', top: '30px'}} />

                <ul ref={this.list} className={'dropList'} onClick={this.handleSelect}>
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