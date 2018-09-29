import React from 'react';
import styled from 'styled-components';

export default props => {
  const { isLoading, hasError } = props;

  const MangerContainer = styled.div`
    position: relative;
  `;

  const Status = styled.div`
    font-size: 100px;
    min-height: 200px;
    text-align: center;
    > i {
      position: absolute;
      top: 50%;
      left: 50%;
    }
    > span {
      display: inline-block;
    }
    > p {
      font-size: 50px;
    }
  `;

  let itemToLoad = props.children;

  if (isLoading) {
    itemToLoad = (
      <Status>
        <i className="fa fa-circle-o-notch fa-spin" />
      </Status>
    );
  }

  if (!isLoading && hasError) {
    itemToLoad = (
      <Status>
        <span className="fa fa-exclamation-triangle" />
        <p>Ooops, something went wrong!</p>
      </Status>
    );
  }

  return <MangerContainer>{itemToLoad}</MangerContainer>;
};
