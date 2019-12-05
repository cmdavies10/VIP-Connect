import React from 'react'
import './LogInForm.css'




class LogInForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'LogInForm will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='log-form'>{message}</h2>
            </div>
        )
    }
}

export default LogInForm