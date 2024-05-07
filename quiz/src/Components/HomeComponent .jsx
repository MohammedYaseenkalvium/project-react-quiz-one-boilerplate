import {Component} from 'react'
import './HomeComponent.css'

class HomeComp extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <>
            <div className='home-div'>
                <h1>Quiz App</h1>
                <button className='play-btn'>Play</button>
            </div>
            </>
        )
    }
}

export default HomeComp