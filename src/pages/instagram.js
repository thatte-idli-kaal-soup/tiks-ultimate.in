import React from 'react';
import JSONData from '../../content/instagram.json';

const JSONbuildtime = () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <ul>
      {JSONData.GraphImages.map((data, index) => {
        return (
          <li key={`content_item_${index}`}>
            <img src={data.display_url} />
          </li>
        );
      })}
    </ul>
  </div>
);
export default JSONbuildtime;
