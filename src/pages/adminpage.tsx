import React, { useState } from "react";
import "./adminpage.css";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const AdminPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    name: "",
    price: 0,
    description: "",
    image: "",
  });

  const addProduct = (product: Omit<Product, "id">) => {
    const newProductWithId: Product = {
      ...product,
      id: Date.now(), // Temporary ID generation
    };
    setProducts((prev) => [...prev, newProductWithId]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProduct(newProduct);
    setNewProduct({ name: "", price: 0, description: "", image: "" });
  };

  const handleInputChange = (
    field: keyof Omit<Product, "id">,
    value: string | number
  ) => {
    setNewProduct((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div class-Name="Container">
      <h1>Admin Dashboard</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            handleInputChange("price", parseFloat(e.target.value))
          }
        />
        <textarea
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => handleInputChange("image", e.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>

      {/* Product List */}
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
