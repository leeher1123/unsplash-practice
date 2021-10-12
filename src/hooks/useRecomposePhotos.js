import { useMediaMatch } from 'rooks';

import { useEffect, useState } from 'react';

import { breakPoint } from '../constants/breakPoint';

export const useRecomposePhotos = (data) => {
  const isLg = useMediaMatch(`(min-width: ${breakPoint.MD}px)`);
  const isMd = useMediaMatch(`(min-width: ${breakPoint.SM}px) and (max-width: ${breakPoint.MD}px)`);
  const isSm = useMediaMatch(`(max-width: ${breakPoint.SM}px)`);

  const initData = isLg ? [[], [], []] : isMd ? [[], []] : [[]];
  const initGroupHeight = isLg ? [0, 0, 0] : isMd ? [0, 0] : [0];
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const result = initData;
    const photosGroupHeight = initGroupHeight;

    for (let i = 0; i < data.length; i++) {
      const minValue = Math.min(...photosGroupHeight);
      const minHeightGroupIndex = photosGroupHeight.indexOf(minValue);

      const { width } = data[i];
      const { height } = data[i];
      const ratioHeight = height / width;

      result[minHeightGroupIndex].push(data[i]);
      photosGroupHeight[minHeightGroupIndex] += ratioHeight;
    }
    setNewData(result);
  }, [data, isLg, isMd, isSm]);

  return newData;
};
