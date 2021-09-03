import React from 'react';
import styled from 'styled-components';

import RelatedSection from './RelatedSection';
import PhotoDetail from './PhotoDetail';
import GridList from '../common/List/GridList';
import CollectionItem from '../common/item/CollectionItem';
import Tags from '../common/Tags';

const PhotoSections = ({ data }) => {
  const a = 1;
  return (
    <Container>
      <PhotoDetail />
      <RelatedSection title="photos">
        연관 리스트 내용
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
