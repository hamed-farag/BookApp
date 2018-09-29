import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BooksList from 'components/shared/booksList';
import StateManager from 'components/shared/stateManager';

import { fetchBooks } from '../redux/actions';

class BookList extends React.Component {
  state = {
    activePage: 1,
    top: 10,
  };

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks(1, this.state.top);
  }

  handlePageChange = pageNumber => {
    const { fetchBooks, books } = this.props;
    this.setState({ activePage: pageNumber }, () => {
      fetchBooks(pageNumber, this.state.top);
    });
  };

  render() {
    const {
      books,
      totalCount,
      isAppInEditMode,
      isLoading,
      hasError,
    } = this.props;
    const { activePage, top } = this.state;

    return (
      <StateManager isLoading={isLoading} hasError={hasError}>
        <BooksList
          books={books}
          config={{
            totalCount,
            isAppInEditMode,
            activePage,
            top,
            pageRangeDisplayed: 5,
          }}
          isAppInEditMode={isAppInEditMode}
          handlePageChange={this.handlePageChange}
        />
      </StateManager>
    );
  }

  componentDidCatch(error) {
    // log error via HOC
  }
}

function mapStoreToProps(store) {
  return {
    books: store.book.items,
    hasError: store.book.hasError,
    isLoading: store.book.isLoading,
    totalCount: store.book.totalCount,
    isAppInEditMode: store.global.isAppInEditMode,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: (pageNumber, pageSize) => {
      dispatch(fetchBooks(pageNumber, pageSize));
    },
  };
}

export default withRouter(
  connect(
    mapStoreToProps,
    mapDispatchToProps,
  )(BookList),
);
