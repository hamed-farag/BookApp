import React from 'react';
import BooksList from 'components/Book/List';
import BooksDetails from 'components/Book/Details';
import BooksForm from 'components/Book/Form';

export default props => {
  const { match } = props;
  if (match.params.id && match.params.mode === 'edit') {
    return <BooksForm id={match.params.id} />;
  }

  if (match.params.mode === 'new') {
    return <BooksForm />;
  }

  if (match.params.id) {
    return <BooksDetails id={match.params.id} />;
  }

  return <BooksList />;
};
