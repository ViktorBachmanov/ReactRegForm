import React from 'react';


class InputSubmit extends React.PureComponent {
    

    render() {
        let isValid = this.props.isValid();
        return (
            <div className={'field'}>      
                <input type='submit' value='Зарегистрироваться'
                    disabled={isValid ? false : true}
                />
            </div>            
        );
    }

}

export default InputSubmit;