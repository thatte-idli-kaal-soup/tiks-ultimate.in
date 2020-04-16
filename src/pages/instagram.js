import React from 'react';
import JSONData from '../../content/thatteidlikaalsoup.json';

const constructImageGrid = images => {
  const imageGrid = [];
  let row,
    rowIndex = -1;
  JSONData.GraphImages.map((image, index) => {
    if (index % 2 == 0) {
      row = [];
      rowIndex += 1;
      imageGrid.push(row);
    } else {
      row = imageGrid[rowIndex];
    }
    row.push(image);
  });
  return imageGrid;
};

const JSONbuildtime = () => {
  const images = constructImageGrid(JSONData.GraphImages);
  return (
    <div className="container">
      {images.map((imageRow, rowIndex) => {
        return (
          <div className="row" key={`image_row_${rowIndex}`}>
            {imageRow.map(data => {
              const text =
                (data.edge_media_to_caption.edges.length > 0 &&
                  data.edge_media_to_caption.edges[0].node.text) ||
                '';
              return (
                <div
                  className="col-6 my-2"
                  key={`content_item_${data.shortcode}`}
                >
                  <a href={`https://www.instagram.com/p/${data.shortcode}`}>
                    <img
                      className="img-fluid rounded"
                      src={data.thumbnail_resources[3].src}
                      alt={text}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default JSONbuildtime;
