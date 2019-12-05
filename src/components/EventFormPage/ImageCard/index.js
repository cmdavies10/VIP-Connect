import React from 'react'
import './MyConcertsCard.css'


class MyConcertsCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'My Concerts Card Info',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='concerts-card'>{message}</h4>
                
            </div>
        )
    }
}

export default MyConcertsCard