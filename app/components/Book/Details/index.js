import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBookByIdAPI } from '../apis';

import { fetchBookById } from '../redux/actions';
import requester from '../../../utilities/api/requester';

import BlurbBook from 'components/shared/blurbBook';

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
    };
  }

  componentDidMount() {
    const { book } = this.state;
    const {
      match: { params },
    } = this.props;

    if (!book) {
      requester(
        {
          url: fetchBookByIdAPI(params.id),
          method: 'GET',
        },
        response => {
          this.setState({
            book: response.data.book,
          });
        },
      );
    }
  }

  render() {
    const { isAppInEditMode } = this.props;
    const { book } = this.state;

    return (
      <React.Fragment>
        <div>{JSON.stringify(book)}</div>
      </React.Fragment>
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

export default withRouter(connect(mapStoreToProps)(BookDetails));
