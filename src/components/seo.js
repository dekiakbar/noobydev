import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article, keyword }) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        defaultDescription,
        siteUrl,
        defaultImage,
        twitterUsername,
        defaultKeyword,
        language
    } = site.siteMetadata

    const seo = {
        title: !!(title) ? title+" | "+defaultTitle : defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        siteUrl: `${siteUrl}${pathname}`,
        keyword: keyword || defaultKeyword,
        language: language
    }

    return (
        <Helmet htmlAttributes={{ lang : site.siteMetadata.language }} title={seo.title} titleTemplate={seo.title}>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="googlebot-news" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <meta name="keywords" content={seo.keyword} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <link rel="canonical" href={seo.siteUrl} />

        {seo.siteUrl && <meta property="og:url" content={seo.siteUrl} />}

        {(article ? true : null) && <meta property="og:type" content="article" />}

        {seo.title && <meta property="og:title" content={seo.title} />}

        {seo.description && (
            <meta property="og:description" content={seo.description} />
        )}

        {seo.image && <meta property="og:image" content={seo.image} />}

        <meta name="twitter:card" content="summary_large_image" />

        {twitterUsername && (
            <meta name="twitter:creator" content={twitterUsername} />
        )}

        {seo.title && <meta name="twitter:title" content={seo.title} />}

        {seo.description && (
            <meta name="twitter:description" content={seo.description} />
        )}

        {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  keyword : PropTypes.string,
  language : PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
  keyword : null,
  language : null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
        defaultKeyword : keyword
        language
      }
    }
  }
`