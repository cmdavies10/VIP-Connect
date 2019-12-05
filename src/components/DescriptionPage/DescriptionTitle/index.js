import React from 'react'
import './DescriptionTitle.css'


class DescriptionTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Meet Your Band!',
            message2: 'Band Name',
            }
        }
    

    render(){
        const message = this.state.message
        const message2 = this.state.message2
        // const user = this.state.user

        return (
            <div>
                <h1 className='titleSeven'>{message}</h1>
                <h4 className='titleEight'>{message2}</h4>
            </div>
        )
    }
}

export default DescriptionTitle