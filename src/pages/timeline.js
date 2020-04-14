import React , { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

export default class Timeline extends Component {
    render() {
      return (
          <div style={{background:"#D3D3D3"}}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="2020 - present"
          >
            <h3 className="vertical-timeline-element-title">NCS 2 Nationals</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <br></br>
            <img className="img-fluid" src={p1} alt="" />
            <p>
             Final seed - 8th
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}  
          >
            <h3 className="vertical-timeline-element-title">NCS 2 Single Gender Regionals</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <br></br>
            <img className="img-fluid" src={p2} alt="" />
            <p>
              Final Seed : Opens - 9th , Womens - 3rd
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">NCS 2 Mixed Regionals</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <br></br>
            <img className="img-fluid" src={p3} alt="" />
            <p>
              Final seed - 8th
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">NCS 2 Sectionals</h3>
            <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
            <br></br>
            <img className="img-fluid" src={p4} alt="" />
            <p>
              Final seed - 8th
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline></div>);
    }
}

