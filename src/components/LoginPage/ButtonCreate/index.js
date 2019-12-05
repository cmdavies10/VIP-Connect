import React from 'react'
import './ButtonCreate.css'


class ButtonCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Create Button will be here',
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

export default ButtonCreate