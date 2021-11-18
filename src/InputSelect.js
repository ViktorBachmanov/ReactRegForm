import React from 'react';


class InputSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelected: false,
            isOpen: false
        }

        this.selectEl = React.createRef();

        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    get isValid() {
        return this.state.isSelected;
    }
    
    handleFocus() {
        
        this.setState({
            isOpen: true
        });
        
    }

    handleBlur() {
        this.setState({
            isOpen: false
        }); 
    }

    handleSelect(e) {
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


export default InputSelect;