import React from 'react';
import { Link } from 'react-router-dom';

import { BlurbBookDetails, Image, bookImage } from './styles';

export default props => {
  const {
    id,
    title,
    description,
    image,
    authorName,
    pagesNumber,
    publishYear,
    isbn,
    categoryName,
  } = props.book;

  const editableField = props.isEditable ? (
    <Link
      className="button is-rounded is-small is-info"
      to={`/book/${id}/edit`}
    >
      Edit
    </Link>
  ) : null;

  const BookImage = bookImage(image);

  return (
    <React.Fragment>
      <BlurbBookDetails>
        <article className="media">
          <figure className="media-left">
            <div className="image is-128x128">
              <Image className="image">
                <BookImage />
              </Image>
            </div>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                {editableField}
                <span className="title is-3">{title}</span>
                <br />
                <br />
                <span className="title is-5">{`By: ${authorName}`}</span>
                <br />
                <span className="title is-5">{`Number Of Pages:  ${pagesNumber}`}</span>
                <br />
                <span className="title is-5">{`Publish Year: ${publishYear}`}</span>
                <br />
                <span className="title is-5">{`ISBN: ${isbn}`}</span>
                <br />
                <span className="title is-5">{`Classification: ${categoryName}`}</span>
                <br />
              </p>
            </div>
          </div>
        </article>
      </BlurbBookDetails>
    </React.Fragment>
  );
};
