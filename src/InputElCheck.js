import React from 'react';


class InputElCheck extends React.Component {
    constructor(props) {
        super(props);
        
        this._isChecked = false;

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(e.target.checked) {
            this._isChecked = true;
        } else {
            this._isChecked = false;
        }

        this.props.callback(this._isChecked);
        //console.log('change');
    }

   
    render() {
        
        return (
            <div className={'field'}>
            <label>
                <input type={'checkbox'} onChange={this.handleChange}/>
                {'Принимаю условия использования'}
            </label>
            </div>
        );
    }

}

export default InputElCheck;