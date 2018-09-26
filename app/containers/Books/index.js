import React from 'react';
import BooksList from 'components/Books/List';
import BooksDetails from 'components/Books/List';
import BooksForm from 'components/Books/List';

export default props => {
  debugger;
  const { match } = props;

  if (match.params.id) {
    return <BooksDetails id={match.params.id} />;
  }

  if (match.params.id && match.params.mode === 'edit') {
    return <BooksForm id={match.params.id} />;
  }

  if (match.params.mode === 'new') {
    return <BooksForm />;
  }

  return <BooksList />;
};
