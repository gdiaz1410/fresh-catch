import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // option 1**
  // constructor() {
  //   super(); // creates a react component. Allows extra content to this component
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(e) {
    e.preventDefault();
    console.log('URL changed');
    // 1. get text from field
    const storeId = this.storeInput.value
    // 2. URL from / to /store/:storeid
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

// import router
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
