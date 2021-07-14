// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = (e) => {
    this.setState({ name : e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name : ''});
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>
          <label>Add Band</label>
          <input type="text" onChange={this.handleChange} value={this.state.name}/>
        </p>
        <input type="submit" />
        </form>
      </div>
    )
  }
};

export default BandInput
