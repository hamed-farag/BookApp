import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import BooksList from 'components/shared/booksList';

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
    const { books, totalCount, isAppInEditMode } = this.props;
    const { activePage, top } = this.state;

    return (
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
