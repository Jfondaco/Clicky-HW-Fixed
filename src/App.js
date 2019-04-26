import React, { Component } from 'react';
import Cards from './components/Cards';
import './styles.css';
import images from './images.json'
import Score from './components/Score'
import Body from './components/Body'

class App extends Component {
  //dont understand the constructor(props) & super(props) but found it in a fix for compiling errors...
  constructor(props) {
    super(props);
  //starting state for variables
  this.state = {
    score: 0,
    images,
    highScore: 0,
    guessed: [],
    correct: true
    // isCorrect: false
  }
}
  //need a click check function determines right or wrong and shuffles

  //need function for moving cards around every click (googled shuffle array and found this)
  moveCards = (arra1) => {
        var ctr = arra1.length, temp, index;
    
        // While there are elements in the array
        while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
        }
        return arra1;
    }
  
  

  //increases score and sets high score
  scoreUp = () => {
    let currentScore = this.state.score + 1;
    this.setState({
      score: currentScore
    });
    if (this.state.score > this.state.highScore){
      this.setState({
        highScore: this.state.score
      });
    }
  }

  //function for when answer is wrong (reset guessed and score)
  wrong = () => {
    this.setState({
      score: 0,
      guessed: [],
      correct: false
    })
  }

  checkGuessed = (name) => {
    //if guessed choice is already in guessed[] then correct = false else score ++
    console.log("checkGuessed running")
    console.log(this.state.guessed)
    let guessedArr = this.state.guessed
    var alreadyGuessed
    console.log("name", name)

    if (guessedArr.toString().indexOf(name) > -1){
      alreadyGuessed = true
      console.log("alreadyGuessed: ", alreadyGuessed)
      this.wrong()
    }
    else  {
      alreadyGuessed = false
      this.scoreUp();
      this.setState({guessed: this.state.guessed.push(name)})
    }        
  }

  render() {
    return (
      <div className="App">
        <Score
          score={this.state.score}
          highScore={this.state.highScore}
          correct = {this.state.correct}
        />
        <Body>
        <div className="row">
          {this.state.images.map(image=> (
            <Cards
              key = {image.id}
              img={image.img}
              name={image.name}
              correct={this.state.correct}
              onClick={() => this.checkGuessed(image.name)}
            />
        
          ))}
          </div>
        </Body>
      </div>
    );
  }
}


export default App;
