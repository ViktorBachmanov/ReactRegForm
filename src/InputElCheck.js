import React from 'react';


class InputElCheck extends React.Component {
    constructor(props) {
        super(props);
        
        //this._isChecked = false;
        this.state = {
            isChecked: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    get isChecked() {
        return this.state.isChecked;
    }

    set isChecked(val) {
        this.setState({
            isChecked: val
        });

        this.props.updateSubmit();
    }
    
    get isValid() {
        return this.isChecked;
    }
    /*
    handleChange(e) {
        if(e.target.checked) {
            this.isChecked = true;
        } else {
            this.isChecked = false;
        }

        //this.props.callback(this._isChecked);
    }*/
    handleChange() {
        if(this.isChecked) {
            this.isChecked = false;
        } else {
            this.isChecked = true;
        }
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