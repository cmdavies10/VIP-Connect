import React from 'react'
import './CreateTitle.css'




class CreateTitle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Create your new VIP here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='create-title'>{message}</h2>
            </div>
        )
    }
}

export default CreateTitle