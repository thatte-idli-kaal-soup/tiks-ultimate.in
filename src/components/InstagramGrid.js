import React, { Component } from 'react';
import PropTypes from 'prop-types';
import JSONData from '../../content/thatteidlikaalsoup.json';

import '../assets/sass/bootstrap/bootstrap-grid.min.css';
import '../assets/sass/instagram-grid.css';

const constructImageGrid = images => {
  const imageGrid = [];
  let row,
    rowIndex = -1;
  JSONData.GraphImages.forEach((image, index) => {
    if (index % 3 === 0) {
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

const truncateText = (text, maxLength) => {
  if (text.length < maxLength) {
    return text;
  }
  let output = text.substr(0, maxLength);
  output = output.substr(0, output.lastIndexOf(' '));
  return `${output} ...`;
};

class InstagramThumbnail extends Component {
  render() {
    const { data } = this.props;
    const text =
      (data.edge_media_to_caption.edges.length > 0 &&
        data.edge_media_to_caption.edges[0].node.text) ||
      '';
    const thumbnail = data.thumbnail_src;
    return (
      <div className="col-4 my-1 px-1">
        <a href={`https://www.instagram.com/p/${data.shortcode}`}>
          <div className="hovereffect">
            <img className="img-fluid" src={thumbnail} alt={text} />
            <div className="overlay">
              <span className="info">{truncateText(text, 420)}</span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

class InstagramGrid extends Component {
  state = { rowCount: 3 };
  showMoreRows() {
    const { rowCount } = this.state;
    this.setState({ rowCount: rowCount + 3 });
  }
  render() {
    const { imageData } = this.props;
    const { rowCount } = this.state;
    const imageGrid = constructImageGrid(imageData.GraphImages);
    return (
      <div className="container">
        {imageGrid
          .filter((row, rowIndex) => rowIndex < rowCount)
          .map((imageRow, rowIndex) => {
            return (
              <div className="row" key={`image_row_${rowIndex}`}>
                {imageRow.map(data => (
                  <InstagramThumbnail
                    key={`thumbnail_${data.shortcode}`}
                    data={data}
                  />
                ))}
              </div>
            );
          })}
        <div style={{ textAlign: 'center' }}>
          <a
            className="btn btn-primary"
            onClick={() => {
              this.showMoreRows();
            }}
          >
            Show More
          </a>
        </div>
      </div>
    );
  }
}

InstagramGrid.propTypes = {
  imageData: PropTypes.object.isRequired,
};

export default InstagramGrid;
