import React, {Component} from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import './QuizMain.css';
import FinalPage from '../FinalPage/FinalPage';


export default class Quiz extends Component {

    
    // initiating the local state
    state = {
        quiestions: {
            1: 'What is a blockchain:',
            2: 'A blockchain could be called a digital ledger of cryptocurrency transactions:',
            3: 'Each block in the blockchain contains:',
            4: 'The most important characteristic of the Blockchain is:',
            5: 'The feature that prevents data from being modified once added to the Blockchain is also called:',
            6: 'Bitcoin was first introduced to the world in:',
            7: 'Bitcoin was created by a person or a group of people using the name:',
            8: 'The initial idea for Bitcoin was shared by Satoshi Nakamoto in a paper entitled “Bitcoin: A Peer-to-Peer Electronic Cash System”. What is this document also called today:',
            9: 'The Bitcoin Whitepaper was originally published in:',
            10: 'The first block in the Bitcoin’s blockchain was “mined” on January 3-rd, 2009. It is also called:',
        },
        answers: {
            1: {
                1: 'A growing list of records, called blocks, that are linked using cryptography',
                2: 'The technology behind Bitcoin',
                3: 'The invention that made cryptocurrencies possible',
                4: 'All of the above'
            },
            2: {
                1: 'True',
                2: 'Not true',
                3: 'True only for Bitcoin',
                4: 'All of the above'
            },
            3: {
                1: 'A cryptographic hash of the previous block',
                2: 'A timestamp',
                3: 'Transaction data (generally represented as a Merkle tree)',
                4: 'All of the above'
            },
            4: {
                1: 'It is a top technology',
                2: 'The information is encrypted',
                3: 'Once data is entered to the block, it can not be changed',
                4: 'It is decentralized'
            },
            5: {
                1: 'Immutability',
                2: 'Mutability',
                3: 'Immunity',
                4: 'Amenability'
            },
            6: {
                1: '1986',
                2: '2000',
                3: '2008',
                4: '2015'
            },
            7: {
                1: 'Hal Finney',
                2: 'Nick Szabo',
                3: 'Satoshi Nakamoto',
                4: 'Craig Wright'
            },
            8: {
                1: 'The Bitcoin Whitepaper',
                2: 'The Bitcoin Blueprint',
                3: 'The Bitcoin Manifesto',
                4: 'All of the above'
            },
            9: {
                1: 'A secret IT forum',
                2: 'A hacker website',
                3: 'A cryptography mailing list',
                4: 'A crypto magazine'
            },
            10: {
                1: 'The Genesis block',
                2: 'The Satoshi brick',
                3: 'The One block',
                4: 'All of the above'
            },
        },
        correctAnswers: {
            1: '4',
            2: '1',
            3: '4',
            4: '3',
            5: '1',
            6: '3',
            7: '3',
            8: '1',
            9: '3',
            10: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next Question</button>
                    </>) : ( <FinalPage score={score} />
                        /* <div className="finalPage">
                            <h1>You have completed the quiz!</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Thank you!</p>
                        </div> */
                    )
                }
            </div>
        );
    }
}
