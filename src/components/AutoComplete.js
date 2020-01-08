import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

export class AutoComplete extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array)
  };
  static defaultProperty = {
    suggestions: []
  };
  constructor(props) {
    super(props);
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: "",
      value: null,
      sugest:[]
    };
  }

  componentDidUpdate(prevProps){
      return this.props.suggestion !== prevProps.suggestion
  }

  handleChange = async e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    
    // if (sugest.length > 0) {
      const filteredSuggestions = suggestions.filter(
        suggestion =>
          suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );

      this.setState({
        activeSuggestion: 0,
        filteredSuggestions,
        showSuggestions: true,
        userInput: e.currentTarget.value
      });
    //   await searchMovies(userInput);
    // }
  };

  onClick = e => {
    const { filteredSuggestions } = this.state;
    const { innerText } = e.currentTarget;
    let index = filteredSuggestions.findIndex(x => x.title === innerText);
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: innerText,
      value: filteredSuggestions[index]
    });
  };
  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
        handleChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "";
              }

              return (
                <li key={index} onClick={onClick}>
                  {suggestion.title}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className="no-suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        {/* <input
          type="search"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        /> */}
        <InputGroup className="ml-2">
          <FormControl
            onChange={handleChange}
            onKeyDown={onKeyDown}
            value={userInput}
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button style={{ color: "#fff" }} variant="light">
              <FaSearch color="grey" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {suggestionsListComponent}
      </React.Fragment>
    );
  }
}

export default AutoComplete;
