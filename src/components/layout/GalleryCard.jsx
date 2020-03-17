import React from 'react';
import {
  GalleryCard as StyledGalleryCard,
  MainImage,
  GalleryCardFooter as Footer,
  GalleryCardText as Text,
  GalleryCardAuthor as Author,
  Options,
  Container
} from './Layout.style';

import { COLORS } from '../../constants/styles';

import { Button } from '../ui/buttons';
import Img from '../ui/images';
import { NavbarItem } from '../ui/navbar';
import { HeartIcon, ChatIcon } from '../ui/icons';

export default function GalleryCard({
  ownerName,
  ownerImage,
  image,
  text,
  likes,
  comments
}) {
  const [mainImageError, setMainImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);

  const anyLikes = Boolean(likes);
  const anyChats = Boolean(comments);
  const heartIconEmpty = COLORS.darkGray;
  const heartIconFilled = COLORS.redRose;
  const chatIconEmpty = COLORS.darkGray;
  const chatIconFilled = COLORS.primary;

  return (
    <StyledGalleryCard>
      {imageLoading && <p>Loading...</p>}
      {!mainImageError && (
        <MainImage
          onError={() => {
            setMainImageError(true);
            setImageLoading(false);
          }}
          onLoad={() => {
            setImageLoading(false);
          }}
          src={image}
          alt={text}
        />
      )}
      <Footer>
        <Text>{text}</Text>
        <Container justifyContent="space-between">
          <Author>
            <Img src={ownerImage} alt={ownerName} />
            <p>{ownerName}</p>
          </Author>
          <Options>
            <NavbarItem>
              <Button>
                <HeartIcon fill={anyLikes ? heartIconFilled : heartIconEmpty} />
                <span className="likes__count">{likes}</span>
              </Button>
              <Button>
                <ChatIcon fill={anyChats ? chatIconFilled : chatIconEmpty} />
                <span className="likes__count">{comments}</span>
              </Button>
            </NavbarItem>
          </Options>
        </Container>
      </Footer>
    </StyledGalleryCard>
  );
}