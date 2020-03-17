import React from 'react';
import { APIContext as API } from '../../context/apiContext';
import { withSize } from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import { Grid as StyledGrid } from './Layout.style';

import GalleryCard from './GalleryCard';

import Loader from '../ui/loaders';

const Grid = ({ size: { width } }) => {
  const { data, errorMessage, loading } = React.useContext(API);

  const getColumnWidth = React.useCallback(() => {
    if (width >= 1280) {
      return '20%';
    } else if (width > 1024) {
      return '25%';
    } else if (width > 768) {
      return '33.33%';
    } else if (width > 480) {
      return '50%';
    }

    return '100%';
  }, [width]);

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  if (loading) {
    return <Loader />;
  }
  
  if (data) return (
    <StyledGrid>
      <StackGrid
        gutterWidth={16}
        gutterHeight={16}
        columnWidth={getColumnWidth()}
      >
        {data.map(item => (
          <GalleryCard key={item.id} {...item} />
        ))}
      </StackGrid>
    </StyledGrid>
  );
}

export default withSize()(Grid);
