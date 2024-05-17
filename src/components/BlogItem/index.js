import './index.css'
const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <div className="user-containe">
      <div className="user-container">
        <h1 className="para">{title}</h1>
        <p className="para1">{publishedDate}</p>
      </div>
      <div>
        <p className="para1">{description}</p>
        <hr />
      </div>
    </div>
  )
}
export default BlogItem
