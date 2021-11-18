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
        let checkMark = this.isChecked ? 'visible' : 'hidden';
        let classNames = this.isChecked ? 'checked' : '';

        return (
            <div id='agree_field'>
                <div id='check_box' onClick={this.handleChange} className={classNames}>
                    <img id='check_mark' src='/pics/check-mark.svg' style={{visibility: checkMark}} alt='v'/>
                </div>
                
                <div style={{marginLeft: '8px'}}>Принимаю <a href='##'>условия</a> использования</div>

            </div>
        );
    }

}

export default InputElCheck;