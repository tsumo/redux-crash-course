import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      const min = 101;
      const max = 100000;
      nextProps.newPost.id = Math.floor(Math.random() * (max - min + 1)) + min;
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <>
        <h1> Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(
  mapStateToProps,
  {fetchPosts},
)(Posts);
