import React from 'react'
import './ButtonEdit.css'


class ButtonEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Edit Button will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <button className='editBtn'>{message}</button>
            </div>
        )
    }
}

export default ButtonEdit