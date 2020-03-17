import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

export const AppFooter = styled.footer`
  align-items: center;
  border-top: 1px solid ${COLORS.lightGray};
  display: flex;
  height: 4rem;
  justify-content: space-between;
  .notifications__count {
    color: ${COLORS.primary};
  }
  .primary {
    background-color: ${COLORS.primary};
    border-radius: 6px;
    color: white;
    height: 32px;
    width: 32px;
    display: flex;
    padding: .25rem;
    align-content: center;
    justify-content: center;
  }
`;