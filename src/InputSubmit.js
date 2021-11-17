import React from 'react';
import './InputEl.css';


class InputSubmit extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            count: 0
        };
             

        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState(prevState => {
                return {
                    count: ++prevState.count
                }
            }
        );
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