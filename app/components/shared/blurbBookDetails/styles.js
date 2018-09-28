import styled from 'styled-components';

export const BlurbBookDetails = styled.div`
  direction: rtl;
`;

export const Image = styled.div`
  height: 200px;
  width: 200px;
`;

export function bookImage(image) {
  return styled.div`
    background: url(${image}) center center / cover no-repeat;
    padding-top: 100%;
  `;
}
