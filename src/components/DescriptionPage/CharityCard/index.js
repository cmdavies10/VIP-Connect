import React from 'react'
import './CharityCard.css'


class CharityCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Charity Card',
            message1: 'Charity Description',
            message2: 'Charity Logo',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='charity-card'>{message}</h4>
                {/* <p className='charity-text'>{message1}</p>
                <h5 className='image-card'>{message2}</h5> */}
                
            </div>
        )
    }
}

export default CharityCard