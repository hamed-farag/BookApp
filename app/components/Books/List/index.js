// loading then list books
// https://github.com/AdeleD/react-paginate#readme

import React from 'react';
import { connect } from 'react-redux';
import Pagination from 'react-js-pagination';

import { fetchBooks } from '../redux/actions';

import BlurbBook from 'components/shared/blurbBook';

class BookList extends React.Component {
  state = {
    activePage: 1,
    top: 10,
  };

  componentDidMount() {
    const { fetchBooks } = this.props;
    //    pageNumber, pageSize
    fetchBooks(1, this.state.top);
  }

  handlePageChange = pageNumber => {
    const { fetchBooks, books } = this.props;
    this.setState({ activePage: pageNumber }, () => {
      fetchBooks(pageNumber, this.state.top);
    });
  };

  render() {
    const { books, totalCount } = this.props;
    const { activePage, top } = this.state;

    return (
      <React.Fragment>
        {books.map(book => {
          return <BlurbBook book={book} key={book.id} />;
        })}
        <Pagination
          activePage={activePage}
          itemsCountPerPage={top}
          totalItemsCount={totalCount}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </React.Fragment>
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: (top, skip) => {
      dispatch(fetchBooks(top, skip));
    },
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(BookList);
