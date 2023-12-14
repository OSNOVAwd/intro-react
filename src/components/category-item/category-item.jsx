import './category_item.css'

const CategoryItem = ({info}) => {
  return (
    <div className="category-item">
      <p>{info.title}</p>
      <h3>{info.describe}</h3>
    </div>
  )
}

export default CategoryItem