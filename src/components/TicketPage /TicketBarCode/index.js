import React from 'react'
import './TicketBarCode.css'


class TicketBarCode extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Bar Code Here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='bar-code'>{message}</h2>
            </div>
        )
    }
}

export default TicketBarCode