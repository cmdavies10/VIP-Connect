import React from 'react'
import './MyConcertsTitle.css'


class MyConcertsTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Name of the Band',
            message2: 'Meet Your Band!',
            }
        }
    

    render(){
        const message = this.state.message
        const message2 = this.state.message2
        // const user = this.state.user

        return (
            <div>
                <h1 className='titleThree'>{message}</h1>
                <h4 className='titleFour'>{message2}</h4>
            </div>
        )
    }
}

export default MyConcertsTitle