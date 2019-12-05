import React from 'react'
import './CreateForm.css'


class CreateForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Event Create Form will be here',
            }
        }
    

    render(){
        const message = this.state.message
        // const user = this.state.user

        return (
            <div>
                <h2 className='create-form'>{message}</h2>
            </div>
        )
    }
}

export default CreateForm