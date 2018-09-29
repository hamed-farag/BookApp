import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class AuthorDetails extends React.Component {
  state = {};

  render() {
    return <div>ssss</div>;
  }
}

function mapStoreToProps(store) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default withRouter(
  connect(
    mapStoreToProps,
    mapDispatchToProps,
  )(AuthorDetails),
);
