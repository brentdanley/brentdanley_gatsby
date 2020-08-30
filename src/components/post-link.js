import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.slug}>
      {post.frontmatter.title}
    </Link>
    <div>{post.frontmatter.date}</div>
    <p>{post.frontmatter.summary}</p>
  </div>
)
export default PostLink