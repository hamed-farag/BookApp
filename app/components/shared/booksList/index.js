import React from 'react';
import Pagination from 'react-js-pagination';

import BlurbBook from 'components/shared/blurbBook';

export default props => {
  const { books, handlePageChange, isAppInEditMode, config } = props;
  const { activePage, top, totalCount, pageRangeDisplayed } = config;
  debugger;
  return (
    <React.Fragment>
      {books.map(book => (
        <BlurbBook book={book} isEditable={isAppInEditMode} key={book.id} />
      ))}
      <Pagination
        activePage={activePage}
        itemsCountPerPage={top}
        totalItemsCount={totalCount}
        pageRangeDisplayed={pageRangeDisplayed}
        onChange={handlePageChange}
      />
    </React.Fragment>
  );
};
