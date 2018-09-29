import React from 'react';
import ReactDOM from 'react-dom';
import QaComponent from './QaComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("tab clicked!");
    this.setState({visible: !(this.state.visible)})
  }

  render() {
    let className = this.state.visible ? 'tab-open' : 'tab';
    let tabText = this.state.visible ? '-' : '+';

    return(
      <div>
        <h2>We're here to help</h2>
        <QaComponent
          data={this.props.data}
          handleClick={this.handleClick}
          className={className}
          tabText={tabText}
        />
      </div>
    )
  }
}

export default App;
