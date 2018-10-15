import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import "../css/contact.css";

export default function ContactPage({ data }) {

    // https://docs.google.com/forms/d/e/1FAIpQLSesA7HL5e2OSybPdhbjYKBao3sXyQ5tgGeOyyHxxqIGc_0rPw/viewform?usp=pp_url&entry.1718035081=Name&entry.130024216=Email&entry.1129070954=Subject&entry.969548444=Message

    const action = "https://docs.google.com/forms/d/e/1FAIpQLSesA7HL5e2OSybPdhbjYKBao3sXyQ5tgGeOyyHxxqIGc_0rPw/formResponse?";

    const name = "entry.1718035081";
    const email = "entry.130024216";
    const subject = "entry.1129070954";
    const message = "entry.969548444";

  return (
    <Layout>
      {/* Hero */}
      <section id="contact-hero">
        <Img
          style={{
            maxHeight: "150px"
          }}
          fluid={data.contactHero.childImageSharp.fluid}
        />
        <div className="contact-title container">
          <span>Request a quote</span>
        </div>
      </section>

      {/* contact */}
      <section id="Contact">
        <div className="contact container">
          <div className="info">
            <h2>Info</h2>
            <div className="info-items">
              <div className="info-item">
                <p>
                  <i className="fas fa-map-marked-alt" />
                  5984 Street Name, Atlanta, GA 00000,
                </p>
              </div>
              <div className="info-item">
                <p>
                  <i className="fas fa-clock" />
                  Hours: 9-5 M-F, 10-3 S, Closed Sunday
                </p>
              </div>
              <div className="info-item">
                <p>
                  <i className="fas fa-phone" />
                  +1 770 555 5555
                </p>
              </div>
              <div className="info-item">
                <p>
                  <i className="fas fa-envelope" />
                  Contact@Jingles.com
                </p>
              </div>
            </div>
          </div>



          <div className="form">
            <h2>Request a quote</h2>

            <form action={action} id="gForm" name="gForm" target="hidden_iframe" onsubmit="submitted=true;">



              <label htmlFor={name}>Name</label>
              <input type="text" name={name} id={name}/>

              <label htmlFor={email}>Email</label>
              <input type="text" name={email} />

              <label htmlFor={subject}>Subject</label>
              <input type="text" name={subject} id={subject}/>

              <label htmlFor={message}>Message</label>
              <textarea type="text" name={message} id={message}/>

              <input type="submit" value="submit"/>
            </form>

            <iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted){}"></iframe>

          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ContactPageQuery {
    contactHero: file(relativePath: { eq: "contactHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
