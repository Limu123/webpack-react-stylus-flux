import React from 'react';


var Items = React.createClass({
    render(){
      return (
        <div className={ this.props.config }>
          <small className="light-300 uppercase spacing">{ this.props.config }</small>
          <h1 className="bold-700">Siroop</h1>
          <h2 className="bold-700">happy shopping</h2>
          <hr></hr>
          <small className="light-300 uppercase spacing">Happy Shopping</small>
          <h2 className="bold-700">Willkommen im Internet der schönen Dinge</h2>
          <hr></hr>
          <small className="light-300 uppercase spacing">Font Weights</small>
          <p className="thin-100">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="light-300">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="normal-400">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="medium-500">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="bold-700">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          <p className="ultra-bold-900">The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        </div>
      )
    }
});

module.exports = Items;
