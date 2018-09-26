// bulma media object

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  const { id, title, description, image } = props.book;

  const BookImage = styled.div`
    background: url(${image}) center center / cover no-repeat;
  `;

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
      <div class="media-right">
        <button class="delete" />
      </div>
    </article>
  );
};
