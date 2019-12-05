import React from 'react'
import './BuyForm.css'


class BuyForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Buy Form will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='buy-form'>{message}</h2>
            </div>
        )
    }
}

export default BuyForm