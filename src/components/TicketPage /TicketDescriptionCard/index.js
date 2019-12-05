import React from 'react'
import './TicketDescriptionCard.css'


class TicketDescriptionCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Ticket Description Card will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h6 className='ticket-text'>{message}</h6>
            </div>
        )
    }
}

export default TicketDescriptionCard