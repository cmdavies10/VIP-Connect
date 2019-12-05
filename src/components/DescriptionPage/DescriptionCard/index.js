import React from 'react'
import './DescriptionCard.css'


class DescriptionCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Description Card Info',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='description-card'>{message}</h4>
                
            </div>
        )
    }
}

export default DescriptionCard