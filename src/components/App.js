import React from 'react';
import ReactDOM from 'react-dom';
import QaComponent from './QaComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      selectedId: null,
    }
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(id) {
    if(this.state.selectedId === id){
      this.setState({ visible: !(this.state.visible)});
    }
    else {
      this.setState({ visible: true });
    }
    this.setState({ selectedId: id });
  }

  render() {
    // console.log(this.state);
    let qasData = this.props.data.map(item => {
      let className;
      let tabText;

      if(this.state.selectedId === item.id && this.state.visible) {
        className = 'tab-open';
        tabText = '-';
      }
      else {
        className = 'tab';
        tabText = '+';
      }

      let handleClick = () => {
        this.setSelectedTab(item.id)
      }

      return (
        <QaComponent
          key={item.id}
          data={item}
          handleClick={handleClick}
          className={className}
          tabText={tabText}
        />
      );
    });

    return(
      <div>
        <h2>We're here to help</h2>
        {qasData}
      </div>
    )
  }
}

export default App;
