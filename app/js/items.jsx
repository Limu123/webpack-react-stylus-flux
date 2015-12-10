import React from 'react';


var Items = React.createClass({
    render(){
      return (
        <div className={ this.props.config }>
          <h1 className="bold-700">{ this.props.config }</h1>
          <h2 className="bold-700">Siroop</h2>
          <p className="thin-100">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="light-300">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="normal-400">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <small className="light-300 uppercase spacing">An uppercase, spaced title</small>
          <p className="medium-500">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="bold-700">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="ultra-bold-900">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        </div>
      )
    }
});

module.exports = Items;
