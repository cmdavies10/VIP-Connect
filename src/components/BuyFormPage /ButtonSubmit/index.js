import React from 'react'
import './ButtonSubmit.css'


class ButtonSubmit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Submit Button will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <button className='submitBtn'>{message}</button>
            </div>
        )
    }
}

export default ButtonSubmit