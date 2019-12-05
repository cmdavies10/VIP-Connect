import React from 'react'
import './BuyDescription.css'


class BuyDescription extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Description Event you chose will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h5 className='buy-text'>{message}</h5>
            </div>
        )
    }
}

export default BuyDescription