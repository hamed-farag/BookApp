// loading then list books
// https://github.com/AdeleD/react-paginate#readme

import React from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from '../redux/actions';

import BlurbBook from 'components/shared/blurbBook';

class BookList extends React.Component {
  state = {};

  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    const { books } = this.props;
    return books.map(book => {
      return <BlurbBook book={book} key={book.id} />;
    });
  }

  componentDidCatch(error) {
    // log error via HOC
  }
}

function mapStoreToProps(store) {
  return {
    books: store.book.items,
    hasError: store.book.hasError,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks());
    },
  };
}

export default connect(
  mapStoreToProps,
  mapDispatchToProps,
)(BookList);
