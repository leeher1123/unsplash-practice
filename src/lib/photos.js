export const recomposePhotos = (data) => {
  let result = [[], [], []];
  let photosGroupHeight = [0, 0, 0];

  for(let i = 0; i < data.length; i++) {

    const minValue = Math.min(...photosGroupHeight);
    const minHeightGroupIndex = photosGroupHeight.indexOf(minValue);

    const width = data[i].width;
    const height = data[i].height;
    const ratioHeight = height / width;

    result[minHeightGroupIndex].push(data[i]);
    photosGroupHeight[minHeightGroupIndex] += ratioHeight;

  }


  return result;
}