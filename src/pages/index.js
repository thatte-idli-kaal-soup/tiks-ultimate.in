import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

const IndexPage = () => (
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
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Ultimate Frisbee
            </h2>
            <p className="lead mb-5">
            Ultimate Frisbee is a self-refereed, team sport in which players seek to score points by passing a Disc/Frisbee to a teammate over the opposing team’s goal line. It is a Non-Contact, Mixed Gender sport known for its Spirit of the Game.
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
      id="timeline">
      <div className="container">
        <div className="content-section-heading">
          {/* <h3 className="text-secondary mb-0">Our Journey</h3> */}
          <h2 className="mb-5">Our Journey</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-screen-smartphone"></i>
            </span>
            <h4>
              <strong>Responsive</strong>
            </h4>
            <p className="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-pencil"></i>
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
              <i className="icon-like"></i>
            </span>
            <h4>
              <strong>Favorited</strong>
            </h4>
            <p className="text-faded mb-0">
              Millions of users
              <i className="fas fa-heart"></i>
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-mustache"></i>
            </span>
            <h4>
              <strong>Question</strong>
            </h4>
            <p className="text-faded mb-0">I mustache you a question...</p>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">
          Welcome to
          <em>your</em>
          next website!
        </h2>
        <a
          className="btn btn-primary btn-xl"
          href="https://github.com/anubhavsrivastava/gatsby-starter-stylish"
        >
          Download Now!
        </a>
      </div>
    </section> */}

    <section className="content-section" id="gallery">
      <div className="container">
        <div className="content-section-heading text-center">
          {/* <h3 className="text-secondary mb-0">Gallery</h3> */}
          <h2 className="mb-5">Gallery</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Stationary</h2>
                  <p className="mb-0">
                    A yellow pencil with envelopes on a clean, blue backdrop!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p1} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Ice Cream</h2>
                  <p className="mb-0">
                    A dark blue background with a colored pencil, a clip, and a
                    tiny ice cream cone!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p2} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Strawberries</h2>
                  <p className="mb-0">
                    Strawberries are such a tasty snack, especially with a
                    little sugar on top!
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p3} alt="" />
            </a>
          </div>
          <div className="col-lg-6">
            <a className="portfolio-item" href="/#">
              <span className="caption">
                <span className="caption-content">
                  <h2>Workspace</h2>
                  <p className="mb-0">
                    A yellow workspace with some scissors, pencils, and other
                    objects.
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p4} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
        <a href="/#" className="btn btn-xl btn-light mr-4">
          Click Me!
        </a>
        <a href="/#" className="btn btn-xl btn-dark">
          Look at Me!
        </a>
      </div>
    </section> */}

    {/* <section id="contact">
      <a href="https://www.123formbuilder.com/form-5387850/">Contact</a>
    </section> */}

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
