import styled from 'styled-components';

export const Field = styled.div`
  position: relative;
`;

export const FieldLabel = styled.div`
  position: absolute;
  color: #333333;
  top: -25px;
  font-size: 14px;
  @media (min-width: 768px) {
    top: -15px;
  }
`;

export const FieldBody = styled.div`
  margin-top: 15px;
  width: 100%;
`;

export const SelectField = styled.div`
  width: 100%;
  > select {
    width: 100%;
  }
`;
