import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Link } from "gatsby";

import "../css/index.css";

export default function IndexPage({ data }) {
  return (
    <Layout>
      {/* Hero */}
      <section id="hero">
        <Img
          style={{
            height: "45vh"
          }}
          fluid={data.hero1.childImageSharp.fluid}
        />
        <div className="hero-title container">
          <h1>Jingles</h1>
          <p>The best Jingles in your city!</p>
          <div className="hero-btns">
            <Link to="/" className="btn quote">
              Request a quote
            </Link>
            <Link to="/" className="btn sample">
              Samples
            </Link>
          </div>
        </div>
      </section>

      {/* Talents */}
      <section id="talents">
        <div className="title container">
          <h2>Our Talents</h2>
        </div>
        <div className="talents container">
          <div className="talent jingles">
            <Img fluid={data.jingles.childImageSharp.fluid} />
            <h2>Jingles</h2>
          </div>
          <div className="talent instrumentals">
            <Img fluid={data.instrumentals.childImageSharp.fluid} />
            <h2>Instrumentals</h2>
          </div>
          <div className="talent voiceOver">
            <Img fluid={data.voiceOver.childImageSharp.fluid} />
            <h2>Voice Overs</h2>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands">
        <div className="title container">
          <h2>Brands we have worked with</h2>
        </div>
        <div className="brands container">
          <div className="brand">
            <i class="fab fa-amazon" />
          </div>
          <div className="brand">
            <i class="fab fa-apple" />
          </div>
          <div className="brand">
            <i class="fab fa-xbox" />
          </div>
          <div className="brand">
            <i class="fab fa-lyft" />
          </div>
        </div>
      </section>

      {/* Whay us? */}
      <section id="whys">
        <div className="title container">
          <h2>Why us?</h2>
        </div>
        <div className="whys container">
          <div className="why">
            <h3>80 million</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <div className="why">
            <h3>80 million</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
          <div className="why">
            <h3>80 million</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const contactQuery = graphql`
  query {
    hero1: file(relativePath: { eq: "hero1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jingles: file(relativePath: { eq: "jingles.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    voiceOver: file(relativePath: { eq: "voiceOver.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    instrumentals: file(relativePath: { eq: "instrumentals.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
