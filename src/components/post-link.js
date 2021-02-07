import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img height="100%" width="100%" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link" title={post.frontmatter.title}>
          {post.frontmatter.title}
        </Link>
      </h2>
      {!!post.frontmatter.metaDescription && (
        <div className="post-excerpt">
          <p>
            {post.frontmatter.metaDescription}
          </p>
        </div>
      )}
      {!!post.frontmatter.tags && (
        post.frontmatter.tags.split(',').map((tag,i) => {
          return(
            <label className="post-tags" key={i} >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </label>
          )
        })
      )}
      <div className="post-meta">
        {post.frontmatter.date}
      </div>
    </header>
  </article>
)
export default PostLink
