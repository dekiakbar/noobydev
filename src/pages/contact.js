import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <SEO article={true} title={"Contact - "+site.siteMetadata.title}/>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>Let me help you kick start your next project &rarr;</p>
        </div>
        <div>
          <form className="form-container" name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required="required"/>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required="required"/>
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" name="subject" id="subject" required="required"/>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" required="required"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <button className="button -primary" style={{marginRight: 0}} type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`