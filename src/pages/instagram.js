import React from 'react';
import JSONData from '../../content/thatteidlikaalsoup.json';

const constructImageGrid = images => {
  const imageGrid = [];
  let row,
    rowIndex = -1;
  JSONData.GraphImages.map((image, index) => {
    if (index % 3 == 0) {
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
              const thumbnail = data.thumbnail_src;
              return (
                <div
                  className="col-4 my-1 px-1"
                  key={`content_item_${data.shortcode}`}
                >
                  <a href={`https://www.instagram.com/p/${data.shortcode}`}>
                    <div>
                      <img
                        className={`img-fluid rounded`}
                        src={thumbnail}
                        alt={text}
                      />
                    </div>
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
