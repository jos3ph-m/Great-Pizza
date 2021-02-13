import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <H1>Pizza of the Day</H1>
      <p>Truffle alfredo sauce topped with 24 carat gold</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
