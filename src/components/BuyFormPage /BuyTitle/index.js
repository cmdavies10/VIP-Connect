import React from 'react'
import './BuyTitle.css'




class BuyTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Buy to see the Band',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='buy-title'>{message}</h2>
            </div>
        )
    }
}

export default BuyTitle