import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";


export default function AboutPage({ data }) {
    return (
      <Layout>
        {/* Hero */}
        <section id="contact-hero">
          <Img
            style={{
              maxHeight: "150px"
            }}
            fluid={data.aboutHero.childImageSharp.fluid}
          />
          <div className="contact-title container">
            <span>About Us</span>
          </div>
        </section>

        {/* About  */}
        <section>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim odio eveniet, corrupti ex quos cupiditate laudantium facere laborum praesentium ipsa sint aperiam iure assumenda corporis rerum laboriosam? Qui, facilis enim.
            </p>
        </section>

      </Layout>
    );
  
}

export const query = graphql`
  query AboutPageQuery {
    aboutHero: file(relativePath: { eq: "contactHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
