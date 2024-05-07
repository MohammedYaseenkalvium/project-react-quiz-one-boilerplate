import {Component} from 'react'
import './HomeComponent.css'

class ResultComp extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <>
            <div className='res-container'>
                <h1>Result</h1>
                <div className='res-div'>
                    <h3>You need more practice!</h3>
                    <h2>Your Score is 20%</h2>
                    <div>
                        <p>Total number of questions</p>
                        <h6>15</h6>
                    </div>
                    <div>
                        <p>Number of attempted questions</p>
                        <h6>9</h6>
                    </div>
                    <div>
                        <p>Number of correct answers</p>
                        <h6>3</h6>
                    </div>
                    <div>
                        <p>Number of wrong answers</p>
                        <h6>6</h6>
                    </div>
                </div>
                <div className='res-btn-div'>
                    <button className='play-again-btn'>Play Again</button>
                    <button className='back-to-home-btn'>Back to Home</button>
                </div>
            </div>
            </>
        )
    }
}

export default ResultComp