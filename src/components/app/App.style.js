import styled from 'styled-components';
import { STANDARD_PADDING } from '../../constants/styles';

export const AppWrapper = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  .clearfix {
    flex-grow: 1;
  }
  > * {
    padding: ${({ paddingVariant }) => paddingVariant || STANDARD_PADDING};
  }
`;
