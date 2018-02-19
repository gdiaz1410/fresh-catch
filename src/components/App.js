import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

// *** App will be our parent component where we hold state

class App extends React.Component {
  constructor() {
    super();
    // ** will bind method to the App
    this.addFish = this.addFish.bind(this);
    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update state
    const fishes = {...this.state.fishes};
    // add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    // fishes state has changed, here is the updated state, which is our const fishes
    this.setState({ fishes })
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header theTagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
