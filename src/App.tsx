import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { Store } from './store';

const mapStateToProps = (state: Store) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
});

class App extends Component<AppProps> {
  simpleAction = () => {
    this.props.simpleAction();
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.simpleAction}>Test redux action</button>
        </div>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

interface AppProps extends Store {
  simpleAction: () => void;
}
