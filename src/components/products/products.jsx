import { products } from "../../constants/data"
import Product from "./product"

const Products = () => {
  return (
    <div className="w-full min-h-[100vh] p-20">
      <h1 className="text-4xl font-bold my-4">Our Vagetables</h1>
      <p>
        All Products
      </p>
      <div className="grid grid-cols-4 gap-4 py-20">
          {products.map(item => (
            <Product product={item}/>
          ))}
      </div>
    </div>
  )
}

export default Products