import React, { Component } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import eventList from '../../content/timeline.json';
// Dynamically import all the images in assets/images directory
// taken from https://stackoverflow.com/a/42118921
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(
  require.context('../assets/images/', false, /\.(png|jpe?g|svg)$/)
);

// create a mapping from image name to image URL
const imageMap = images.reduce((obj, imageURL) => {
  // imageURL reads like /static/saturday-practice-ca0154c425.jpg for saturday-practice.jpg
  // we want a map that maps 'saturday' to the path above
  const key = imageURL
    .slice('/static/'.length)
    .split('-')
    .slice(0, -1)
    .join('-');
  obj[key] = imageURL;
  return obj;
}, new Map());

export default class Timeline extends Component {
  createTimeline() {
    return eventList.Events.map((data, index) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          date={data.date}
        >
          <h3 className="vertical-timeline-element-title">{data.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {data.subtitle}
          </h4>
          <br />
          <img className="img-fluid" src={imageMap[data.image]} alt="" />
          <p>{data.description}</p>
        </VerticalTimelineElement>
      );
    });
  }

  render() {
    return (
      <div style={{ background: '#D3D3D3' }}>
        <VerticalTimeline>{this.createTimeline()}</VerticalTimeline>
      </div>
    );
  }
}
