import React from 'react'
import './TicketTitle.css'




class TicketTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Your Ticket',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='ticket-title'>{message}</h2>
            </div>
        )
    }
}

export default TicketTitle