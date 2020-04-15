import React from 'react';
import JSONData from '../../content/thatteidlikaalsoup.json';

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.GraphImages.map((data, index) => {
        const text =
          (data.edge_media_to_caption.edges.length > 0 &&
            data.edge_media_to_caption.edges[0].node.text) ||
          '';
        return (
          <li key={`content_item_${index}`}>
            <a href={`https://www.instagram.com/p/${data.shortcode}`}>
              <img src={data.thumbnail_resources[3].src} alt={text} />
            </a>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  </div>
);
export default JSONbuildtime;
