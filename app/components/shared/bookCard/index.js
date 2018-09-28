import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default props => {
  const { id, title, description, image, authorName } = props.book;
  const Image = styled.div`
    background: url('${image}') center center / cover no-repeat;
    padding-top: 100%;
  `;

  return (
    <Link to={`/book/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure>
            <Image />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">{`By: ${authorName}`}</p>
            </div>
          </div>

          <div className="content">
            {description && description.substring(0, 300)}
          </div>
        </div>
      </div>
    </Link>
  );
};
