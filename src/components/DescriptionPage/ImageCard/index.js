import React from 'react'
import './ImageCard.css'


class ImageCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Image Here',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='image-card'>{message}</h4>
                
            </div>
        )
    }
}

export default ImageCard