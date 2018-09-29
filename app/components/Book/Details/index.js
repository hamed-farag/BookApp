import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { fetchBookByIdAPI } from '../apis';

import requester from '../../../utilities/api/requester';

import StateManager from 'components/shared/stateManager';
import BlurbBookDetails from 'components/shared/blurbBookDetails';
import SuggestedBooks from './suggested';

class BookDetails extends React.Component {
  constructor(props) {
    super(props);

    const {
      books,
      match: { params },
    } = props;
    const book = books.find(book => book.id === params.id);

    this.state = {
      book,
      isLoading: book ? false : true, // intialize isLoading with true if book object not found at the store
      hasError: null,
    };
  }

  getBookDetails(id) {
    requester(
      {
        url: fetchBookByIdAPI(id),
        method: 'GET',
      },
      response => {
        this.setState({
          book: response.data.book,
          isLoading: false,
        });
      },
      error => {
        this.setState({
          hasError: error,
          isLoading: false,
        });
      },
    );
  }

  componentDidMount() {
    const { book } = this.state;
    const {
      match: { params },
    } = this.props;

    if (!book) {
      this.getBookDetails(params.id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.book && nextProps.id !== prevState.book.id) {
      return { id: nextProps.id };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props; // new one

    if (prevProps.id !== id) {
      this.getBookDetails(id);
    }
  }

  render() {
    const { isAppInEditMode } = this.props;
    const { book, isLoading, hasError } = this.state;

    return (
      <StateManager isLoading={isLoading} hasError={hasError}>
        <Helmet>
          <title>{`Book App - ${book && book.title}`}</title>
        </Helmet>
        <BlurbBookDetails book={book} isEditable={isAppInEditMode} />
        <br />
        <p>{book && book.description}</p>
        <hr />
        <h1 className="title">Suggested Books</h1>
        <SuggestedBooks />
      </StateManager>
    );
  }

  componentDidCatch(error) {
    // log error via HOC
  }
}

function mapStoreToProps(store) {
  return {
    isAppInEditMode: store.global.isAppInEditMode,
    books: store.book.items,
  };
}

// Logging HOC
export default withRouter(connect(mapStoreToProps)(BookDetails));
