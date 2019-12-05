import React from 'react'
import './PackageCard.css'


class PackageCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message: 'Package information',
            }
        }
    

    render(){
        const message = this.state.message
        
        // const user = this.state.user

        return (
            <div>
                <h4 className='PackageCard'>{message}</h4>
                
            </div>
        )
    }
}

export default PackageCard