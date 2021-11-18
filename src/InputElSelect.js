import React from 'react';
import './InputEl.css';
import './InputElSelect.css';


class InputElSelect extends React.Component {
    constructor(props) {
        super(props);

        //this._isSelected = false;
        this.state = {
            isSelected: false,
            isOpen: false
        }

        this.selectEl = React.createRef();
        //this.list = React.createRef();

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
        console.log('handleFocus');
        //this.list.current.style.display = 'block';
         
        this.setState({
            isOpen: true
        });
        
    }

    handleBlur() {
        console.log('blur');
        /*setTimeout(() => { 
            this.list.current.style.display = 'none';
        }, 250);     */ 

       // setTimeout(() => { 
            this.setState({
                isOpen: false
            }); 
        //}, 300);
    }

    handleSelect(e) {
        console.log('mouseDown');
        //this.list.current.style.display = 'none';
        this.selectEl.current.value = e.target.textContent;
        this.setState({
            isSelected: true,
            isOpen: false
        });
        

        this.props.updateSubmit();
    }

    render() {
        let displayVal = this.state.isOpen ? 'block' : 'none';

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

                <img src='/pics/dropdown.svg' style={{position: 'absolute', right: '11px', top: '40px'}} alt='v'/>

                <ul id='drop_list' onMouseDown={this.handleSelect}
                    style={{display: displayVal}}>
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