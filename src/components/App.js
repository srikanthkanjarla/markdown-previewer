import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import Header from './Header';
import defaultMarkdown from '../defaultMarkdown';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: defaultMarkdown
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      markdown: ''
    });
  }

  render() {
    const { markdown } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Editor
            markdown={markdown}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
          />
          <Preview markdown={markdown} />
        </div>
      </div>
    );
  }
}

export default App;
