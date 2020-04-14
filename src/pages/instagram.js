import React from 'react';
import JSONData from '../../content/instagram.json';

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.GraphImages.map((data, index) => {
        return (
          <li key={`content_item_${index}`}>
            <a
              href={`https://www.instagram.com/p/${data.shortcode}`}
              target="_blank"
            >
              <img src={data.display_url} />
            </a>
            <p>
              {' '}
              {data.edge_media_to_caption.edges.length > 0 &&
                data.edge_media_to_caption.edges[0].node.text}
            </p>
          </li>
        );
      })}
    </ul>
  </div>
);
export default JSONbuildtime;
