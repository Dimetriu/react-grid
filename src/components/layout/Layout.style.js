import styled from 'styled-components';
import { COLORS } from '../../constants/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`;

const Wrapper = styled.section`
  padding: 100px 120px;
  padding-bottom: 160px;
  z-index: -1;
  height: auto;
  .likes__count {
    color: ${COLORS.redRose};
  }
  @media (max-width: 768px) {
    padding: 80px 60px;
    padding-bottom: 140px;
  }
  @media (max-width: 480px) {
    padding: 70px 20px;
    padding-bottom: 80px;
  }
`;

export const Heading = styled(Wrapper)`
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    /* identical to box height, or 142% */
    letter-spacing: 0.3px;
    color: #000000;
    margin-bottom: 7px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */
    letter-spacing: 0.3px;
    color: ${COLORS.textDarken};
    /* max-width: 650px; */
  }
  .tag {
    /** Same as */
    /* background-color: #565656; */
    /* opacity: 0.1; */
    background-color: rgba(86, 86, 86, .1);
    mix-blend-mode: normal;
    border-radius: 6px;
    letter-spacing: 0.35px;
    padding: 6px;
  }
`;

export const Grid = styled(Wrapper)``;

export const GalleryCard = styled.section`
  width: 100%;
  height: auto;
  box-sizing: content-box;
  border-radius: 10px;
  background: ${COLORS.secondary};
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const GalleryCardFooter = styled.div`
  height: 65px;
  padding: 10px 15px;
`;

export const GalleryCardText = styled.h2`
  font-weight: 500;
  font-size: 15px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: #000;
`;

export const GalleryCardAuthor = styled.div`
  display: flex;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 8px;
  }
  p {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: ${COLORS.textDarken};
  }
`;

export const Options = styled.div`
  margin-left: 4px;
  *:not(:last-child) {
    margin-right: 6px;
  }
`;
