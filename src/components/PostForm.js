import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  };

  render() {
    return (
      <>
        <h1>Add post</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <label>Body:</label>
          <br />
          <textarea
            name="body"
            rows="10"
            cols="70"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(
  null,
  {createPost},
)(PostForm);
