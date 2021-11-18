import React from 'react';


class InputSubmit extends React.Component {
    constructor(props) {
        super(props);
        /*
        this.state = {
            count: 0
        };*/
        this.state = {};
             

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        /*
        this.setState(prevState => {
                return {
                    count: ++prevState.count
                }
            }
        );*/
        this.setState({});
    }

    


    render() {
        console.log(`submit render:`);
        console.log(`formIsValid: ${this.props.isValid}`);
        
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