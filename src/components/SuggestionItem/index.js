// Write your code here
import {Component} from 'react'

class SuggestionItem extends Component {
  render() {
    const {eachSearch} = this.state
    return (
      <div className="img">
        <p className="para">{eachSearch.suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </div>
    )
  }
}

export default SuggestionItem
