import React from 'react'
import './MainTitle.css'




class MainTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'VIP fan (logo)',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h1 className='title'>{message}</h1>
            </div>
        )
    }
}

export default MainTitle