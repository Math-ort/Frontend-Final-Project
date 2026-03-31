import { setProducts } from "../context/ProductContext"
import product  from "./Products"

export default function Category({ category }) {

const { products } = setProducts()

const filteredProducts = products.filter((product)=> products.categoria === category
); 
  return (
    <div>
        {
            filteredProducts.map((products) => (
                <product key={product._id} product={filteredProducts} />
            )
            )
        }

    </div>


  )
}
