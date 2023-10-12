// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    contentSear: '',
  }

  funFunction = event => {
    this.setState({contentSear: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {contentSear} = this.state
    const filteredData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(contentSear),
    )

    return (
      <div className="container">
        <div className="cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="cart-2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />

            <input
              className="inputVal"
              type="search"
              onChange={this.funFunction}
              value={contentSear}
            />
            {filteredData.map(each => (
              <SuggestionItem eachDet={each} key={each.id} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
