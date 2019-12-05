import React from 'react'
import './OptionsCard.css'


class OptionsCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Band tracking details',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='optionsCard'>{message}</h4>
                
            </div>
        )
    }
}

export default OptionsCard