import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  const { id, title, description, image } = props.book;
  const BookImage = styled.div`
    background: url(${image}) center center / cover no-repeat;
  `;

  const editableField = props.isEditable ? (
    <Link
      className="button is-rounded is-small is-info"
      to={`/book/${id}/edit`}
    >
      Edit
    </Link>
  ) : null;

  return (
    <article className="media">
      <figure className="media-left">
        <div className="image is-128x128">
          <BookImage />
        </div>
      </figure>
      <div className="media-content">
        <div className="content">
          <p>
            <Link to={`/book/${id}`}>
              <strong>{title}</strong>
            </Link>
            <br />
            {description && description.substring(0, 300)}...<Link
              to={`/book/${id}`}
            >
              <small>Read more</small>
            </Link>
          </p>
        </div>
      </div>
      <div className="media-right">{editableField}</div>
    </article>
  );
};
