import './category_item.css'

const CategoryItem = ({item}) => {
  return (
    <div className="category-item">
      <p>{item.title}</p>
      <h3>{item.describe}</h3>
    </div>
  )
}

export default CategoryItem