import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: ''}

  findLength = event => {
    const {value} = event.target
    this.setState({lettersCount: value})
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="bg-main-container">
        <div className="text-container">
          <h1 className="title">Calculate the letters you enter</h1>
          <label htmlFor="inputText" className="pera">
            Enter the phrase
          </label>
          <input
            id="inputText"
            className="input-sty"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.findLength}
          />
          <div className="display-container">
            <p className="button">No.of letters: {lettersCount.length}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img-sty"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
