import React , { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import eventList from '../../content/timeline.json';

export default class Timeline extends Component {

createTimeline(){
    return eventList.Events.map((data, index) => {
        return (
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date={data.date}
            >
            <h3 className="vertical-timeline-element-title">{data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
            <br></br>
            <img className="img-fluid" src={'/timeline-images/'+data.image+'.jpg'} alt="" />
            <p>
             {data.description}
            </p>
            </VerticalTimelineElement>
        );
    })
    
}

    render(){
        return (
            <div style={{background:"#D3D3D3"}}>
                <VerticalTimeline>
                    {this.createTimeline()};
                </VerticalTimeline>
            </div>
        )

    }

}

