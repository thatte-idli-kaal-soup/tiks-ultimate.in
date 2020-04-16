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

const IndexPage = ({ data }) => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#timeline">
            Our Journey
          </a>
        </Scroll>
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
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-smartphone" />
            </span>
            <h4>
              <strong>Responsive</strong>
            </h4>
            <p className="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-pencil" />
            </span>
            <h4>
              <strong>Redesigned</strong>
            </h4>
            <p className="text-faded mb-0">
              Freshly redesigned for Bootstrap 4.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-like" />
            </span>
            <h4>
              <strong>Favorited</strong>
            </h4>
            <p className="text-faded mb-0">
              Millions of users
              <i className="fas fa-heart" />
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-mustache" />
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p className="text-faded mb-0">I mustache you a question...</p>
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
