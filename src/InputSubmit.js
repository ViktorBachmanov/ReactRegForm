import React from 'react';


class InputSubmit extends React.Component {
    constructor(props) {
        super(props);
       
        this.state = {};             

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState({});
    }

    render() {
             
        return (
            <div className={'field'}>      
                <input type='submit' value='Зарегистрироваться'
                    disabled={this.props.isValid() ? false : true}
                />
            </div>            
        );
    }

}

export default InputSubmit;