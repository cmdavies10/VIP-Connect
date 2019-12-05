import React from 'react'
import './ButtonBuy.css'


class ButtonBuy extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Buy Button will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <button className='buyBtn'>{message}</button>
            </div>
        )
    }
}

export default ButtonBuy