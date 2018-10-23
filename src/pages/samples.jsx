import React, { Component } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";


export default function SamplePage({ data }) {
    return (
      <Layout>
        {/* Hero */}
        <section id="contact-hero">
          <Img
            style={{
              maxHeight: "150px"
            }}
            fluid={data.sampleHero.childImageSharp.fluid}
          />
          <div className="contact-title container">
            <span>Samples</span>
          </div>
        </section>

        {/* samples  */}
        <section>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim odio eveniet, corrupti ex quos cupiditate laudantium facere laborum praesentium ipsa sint aperiam iure assumenda corporis rerum laboriosam? Qui, facilis enim.
            </p>
        </section>

      </Layout>
    );
  
}

export const query = graphql`
  query SamplePageQuery {
    sampleHero: file(relativePath: { eq: "contactHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
