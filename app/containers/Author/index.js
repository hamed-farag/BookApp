import React from 'react';
import AuthorDetails from 'components/Author/Details';
// import AuthorForm from 'components/Author/Form';

export default props => {
  const { match } = props;
  // if (match.params.id && match.params.mode === 'edit') {
  //   return <AuthorForm id={match.params.id} />;
  // }

  // if (match.params.mode === 'new') {
  //   return <AuthorForm />;
  // }

  if (match.params.id) {
    return <AuthorDetails id={match.params.id} />;
  }
};
