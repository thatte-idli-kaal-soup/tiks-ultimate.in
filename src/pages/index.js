import React from 'react';

import InstagramGrid from '../components/InstagramGrid.js';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import JSONData from '../../content/tiks_ultimate.json';
import { eventList, images } from './timeline';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const nowEvent = eventList[eventList.length - 1];
const thenEvent = eventList[0];
const position = [12.925456, 77.5782];

const IndexPage = ({ data }) => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
      </div>
      <div className="overlay" />
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>Ultimate Frisbee</h2>
            <p className="lead mb-5">
              Ultimate Frisbee is a self-refereed, team sport in which players
              seek to score points by passing a Disc/Frisbee to a teammate over
              the opposing team’s goal line. It is a Non-Contact, Mixed Gender
              sport known for its Spirit of the Game.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section" id="gallery">
      <div className="container">
        <div className="content-section-heading text-center">
          {/* <h3 className="text-secondary mb-0">Gallery</h3> */}
          <h2 className="mb-5">Gallery</h2>
        </div>
      </div>
      <InstagramGrid imageData={JSONData} />
    </section>

    <section className="content-section bg-dark" id="come-play">
      <div className="container text-center text-white">
        <h1> Come play with us </h1>
        <p>
          Join us at our practices, you are welcome to join us irrespective of
          your age, gender or physical ability. We have players of all
          experience levels attending our sessions
        </p>
        <p>Where? National college Jayanagar. </p>
        <p>Which days? Every Tuesday, Thursday and Saturday</p>
        <p>What time? 6:00am to 7:45am</p>
      </div>
      <Map center={position} zoom={18} style={{ height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <a
              className="btn btn-light btn-xl"
              href="https://goo.gl/maps/YhVLf7o5a83Yx1919"
            >
              National College Jayanagar
            </a>
          </Popup>
        </Marker>
      </Map>
    </section>

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
