import React from 'react'
import './OptionsTitle.css'


class OptionsTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Make your choice &',
            message2: 'Meet Your Band!',
            }
        }
    

    render(){
        const message = this.state.message
        const message2 = this.state.message2
        // const user = this.state.user

        return (
            <div>
                <h4 className='titleOne'>{message}</h4>
                <h1 className='titleTwo'>{message2}</h1>
            </div>
        )
    }
}

export default OptionsTitle