import React from 'react';
import './InputEl.css';
import './InputElSelect.css';


class InputElSelect extends React.Component {
    constructor(props) {
        super(props);

        //this._isSelected = false;
        this.state = {
            isSelected: false
        }

        this.selectEl = React.createRef();
        this.list = React.createRef();

        //this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    get isValid() {
        return this.state.isSelected;
    }
    /*
    handleChange() {
        console.log('Select handleChange');
        this.setState({
            isSelected: true
        });

        this.props.updateSubmit();
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

        this.setState({
            isSelected: true
        });

        this.props.updateSubmit();
    }

    render() {        
        return (
            <div className={'field'} style={{position: 'relative'}}>
                                
                <label>
                    {this.props.label}
                    <input ref={this.selectEl} type={'text'} readOnly style={{cursor: 'default'}}
                            placeholder={this.props.placeholder}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            onChange={this.handleChange}/>
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