import React from 'react';

import './test-add-button.css';

export default class TestAddButton extends React.Component {
  render() {
    return <button onClick={() => this.props.onAdded('Ollo')}>ADD</button>;
  }
}
