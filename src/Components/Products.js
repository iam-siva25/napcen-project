import { useParams } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const { category } = useParams(); // Get category from URL

  // Sample product categories
  const productCategories = {
    electronics: { title: "Electronics", description: "Latest gadgets and devices." },
    furniture: { title: "Furniture", description: "Comfortable and stylish furniture." },
    clothing: { title: "Clothing", description: "Trendy outfits for all seasons." }
  };

  const product = productCategories[category];

  return (
    <main className="products-page">
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </>
      ) : (
        <h2>Please select a product category.</h2>
      )}
    </main>
  );
};

export default Products;
