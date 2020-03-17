import React from 'react';
import { AppWrapper } from './App.style';

import Header from '../header';
import {
  Heading as ContentHeading,
  Grid as Gallery
} from '../layout';
import Footer from '../footer';

export default function App() {
  return (
    <AppWrapper paddingVariant="1.5rem">
      <Header />
      <ContentHeading />
      <Gallery />
      <div className="clearfix" />
      <Footer />
    </AppWrapper>
  );
}