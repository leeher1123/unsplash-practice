export const recomposePhotos = (data) => {
  const result = [[], [], []];
  const photosGroupHeight = [0, 0, 0];

  for (let i = 0; i < data.length; i++) {
    const minValue = Math.min(...photosGroupHeight);
    const minHeightGroupIndex = photosGroupHeight.indexOf(minValue);

    const { width } = data[i];
    const { height } = data[i];
    const ratioHeight = height / width;

    result[minHeightGroupIndex].push(data[i]);
    photosGroupHeight[minHeightGroupIndex] += ratioHeight;
  }

  return result;
};
