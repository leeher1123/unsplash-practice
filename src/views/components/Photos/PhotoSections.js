import React from 'react';
import styled from 'styled-components';

import RelatedSection from './RelatedSection';
import PhotoDetail from './PhotoDetail';
import GridList from '../common/List/GridList';
import CollectionItem from '../common/item/CollectionItem';
import Tags from '../common/Tags';
import PhotoList from '../common/List/PhotoList';

const PhotoSections = ({ data, relatedPhotos }) => {
  const a = 1;
  return (
    <Container>
      <PhotoDetail />
      <RelatedSection title="photos">
        <PhotoList data={relatedPhotos?.results} />
      </RelatedSection>
      <RelatedSection title="collections">
        <GridList
          data={data.related_collections.results}
          renderItem={(item) => <CollectionItem item={item} />}
        />
      </RelatedSection>
      <RelatedSection title="tags">
        <Tags tags={data.tags} />
      </RelatedSection>
    </Container>
  );
};

const Container = styled.div`

`;

export default PhotoSections;
