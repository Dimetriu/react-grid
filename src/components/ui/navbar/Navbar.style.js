import styled from 'styled-components';

export const NavbarItem = styled.span`
  display: flex;
  align-items: center;
  margin-right: ${props => props.marginRight || 0};
  margin-left: ${props => props.marginLeft || 0};
  padding-right: ${props => props.paddingRight || 0};
  padding-left: ${props => props.paddingLeft || 0};
`;

export const Navbar = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 460px;
  padding: 0;
  .left,
  .right {
    display: flex;
  }
`;
