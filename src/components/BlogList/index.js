import BlogItem from '../BlogItem'
import './index.css'
const BlogList = props => {
  const {blogsList} = props
  return (
    <div className="contain">
      {blogsList.map(each => (
        <BlogItem key={each.id} blogsList={each} />
      ))}
    </div>
  )
}
export default BlogList
