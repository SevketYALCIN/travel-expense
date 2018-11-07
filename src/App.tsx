import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import { Store } from './store';
import { Container, Button, Header } from "semantic-ui-react";

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
      <Container className="App">
        <Header as="h1">
          Travelo
        </Header>
        <h3>
          Use Travelo to track your travel expenses during trips with friends and family!
        </h3>
        <Button>
          Get Started
        </Button>
      </Container>
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
