import {Component} from 'react'
import './HomeComponent.css'

class QuizComp extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <>
            <div className='quiz-div'>
                <h2>Question</h2>
                <h6>1 of 15</h6>
                <p>Which is the only mammal that can jump</p>
                <div className='option-div'>
                    <div>Dog</div>
                    <div>Elephant</div>
                    <div>Goat</div>
                    <div>Lion</div>
                </div>
                <div className='btn-div'>
                    <div className='prev-btn'>Previous</div>
                    <div className='nxt-btn'>Next</div>
                    <div className='quit-btn'>Quit</div>
                </div>
            </div>
            </>
        )
    }
}

export default QuizComp