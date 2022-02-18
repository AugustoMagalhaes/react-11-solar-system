import React, { Component } from 'react';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="headline">{headline}</h2>
    );
  }
}

export default Title;
