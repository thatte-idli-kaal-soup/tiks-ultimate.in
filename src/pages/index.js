import React from 'react';
import { graphql } from 'gatsby';

import InstagramGrid from '../components/InstagramGrid.js';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import JSONData from '../../content/thatteidlikaalsoup.json';
import { eventList, images } from './timeline';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

export const query = graphql`
  query BlogPostsQuery {
    allBlogPosts {
      edges {
        node {
          id
          title
          authors
          fields {
            slug
          }
        }
      }
    }
  }
`;

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
        {/* <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-m" href="#timeline">
            Our Journey
          </a>
        </Scroll> */}
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
            <Scroll type="id" element="services" offset={100}>
              <a className="btn btn-dark btn-xl" href="#services">
                {/* Create a component to manage ultimate related blogs */}
                More about the game
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-secondary text-white" id="posts">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>Blog Posts</h2>
            <div>
              {data.allBlogPosts.edges
                .filter(({ node }) => node.id !== 'dummy')
                .map(({ node }) => (
                  <div key={node.fields.slug}>
                    <h5>
                      <a href={`/post/${node.fields.slug}`}>{node.title}</a>
                    </h5>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-dark" id="come play with us">
      <div className="container text-center text-white">
        <h1> Come play with us </h1>
        <p>
          Join us at our practices, you're welcome to join us irrespective of
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

    <section
      className="content-section bg-primary text-white text-center"
      id="timeline"
    >
      <div className="container">
        <div className="content-section-heading">
          {/* <h3 className="text-secondary mb-0">Our Journey</h3> */}
          <h2 className="mb-5">Our Journey</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <img
              src={images[thenEvent.image]}
              style={{ maxHeight: '200px' }}
              alt={images[thenEvent.title]}
            />
            <h4>
              <strong>Then</strong>
            </h4>
            <p className="text-faded mb-0">{thenEvent.date}</p>
          </div>
          <div className="col-lg-6 col-md-9 mb-5 ">
            <a className="btn btn-dark btn-xl" href="/timeline">
              See the Timeline
            </a>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <img
              src={images[nowEvent.image]}
              style={{ maxHeight: '200px' }}
              alt={images[nowEvent.title]}
            />
            <h4>
              <strong>Now</strong>
            </h4>
            <p className="text-faded mb-0">{nowEvent.date}</p>
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

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
