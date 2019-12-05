import React from 'react'
import './ButtonReturn.css'


class ButtonReturn extends React.Component {
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
                <button className='returnBtn'>{message}</button>
            </div>
        )
    }
}

export default ButtonReturn