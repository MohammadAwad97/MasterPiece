import "./ProductList.css";
import PoductCard from "./ProductCard";

function ProductList() {

    const products = [
        {
          id: 1,
          name: "Smartphone",
          price: 500,
          category: "Electronics",
          short_description: "High-end smartphone with advanced features",
          description: "A high-end smartphone with advanced features, powerful hardware, and a stunning display.",
          storeId: 2,
          store_name: "ElectroZone",
          store_address: "456 Tech Avenue",
          url: "https://images.pexels.com/photos/2747421/pexels-photo-2747421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 2,
          name: "Smart TV",
          price: 800,
          category: "Electronics",
          short_description: "65-inch 4K Smart TV with built-in streaming apps",
          description: "A large 65-inch 4K Smart TV with built-in streaming apps for an immersive entertainment experience.",
          storeId: 2,
          store_name: "ElectroZone",
          store_address: "456 Tech Avenue",
          url: "https://images.pexels.com/photos/220911/pexels-photo-220911.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 3,
          name: "Laptop",
          price: 1000,
          category: "Electronics",
          short_description: "Powerful laptop with high-performance specs",
          description: "A powerful laptop with high-performance specifications, ideal for work and gaming.",
          storeId: 2,
          store_name: "ElectroZone",
          store_address: "456 Tech Avenue",
          url: "https://images.pexels.com/photos/3746517/pexels-photo-3746517.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 4,
          name: "T-Shirt",
          price: 20,
          category: "Clothing",
          short_description: "Casual cotton t-shirt",
          description: "A comfortable and casual cotton t-shirt for everyday wear.",
          storeId: 3,
          store_name: "Fashion Emporium",
          store_address: "789 Fashion Boulevard",
          url: "https://images.pexels.com/photos/47305/bananas-banana-shrub-fruits-yellow-47305.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 5,
          name: "Jeans",
          price: 50,
          category: "Clothing",
          short_description: "Slim-fit jeans for men and women",
          description: "Stylish slim-fit jeans designed for both men and women, perfect for any occasion.",
          storeId: 3,
          store_name: "Fashion Emporium",
          store_address: "789 Fashion Boulevard",
          url: "https://images.pexels.com/photos/2629173/pexels-photo-2629173.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 6,
          name: "Sneakers",
          price: 80,
          category: "Clothing",
          short_description: "Stylish and comfortable sneakers",
          description: "Fashionable sneakers that offer both style and comfort, suitable for daily use.",
          storeId: 3,
          store_name: "Fashion Emporium",
          store_address: "789 Fashion Boulevard",
          url: "https://images.pexels.com/photos/14920999/pexels-photo-14920999.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 7,
          name: "Grocery Bundle",
          price: 50,
          category: "Supermarket",
          short_description: "Assorted groceries for a week",
          description: "A carefully curated bundle of assorted groceries to cover your needs for a week.",
          storeId: 1,
          store_name: "Super Mart",
          store_address: "123 Main Street",
          url: "https://images.pexels.com/photos/15662974/pexels-photo-15662974/free-photo-of-fresh-ripe-figs.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 8,
          name: "Fresh Fruits",
          price: 10,
          category: "Supermarket",
          short_description: "Assorted fresh fruits",
          description: "A variety of fresh and nutritious fruits to keep you healthy and energized.",
          storeId: 1,
          store_name: "Super Mart",
          store_address: "123 Main Street",
          url: "https://images.pexels.com/photos/17245317/pexels-photo-17245317/free-photo-of-halves-of-pomegranates.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
          id: 9,
          name: "Dairy Products",
          price: 30,
          category: "Supermarket",
          short_description: "Milk, cheese, and yogurt",
          description: "A selection of fresh dairy products, including milk, cheese, and yogurt.",
          storeId: 1,
          store_name: "Super Mart",
          store_address: "123 Main Street",
          url: "https://images.pexels.com/photos/13306351/pexels-photo-13306351.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
          id: 10,
          name: "Headphones",
          price: 120,
          category: "Electronics",
          short_description: "Premium over-ear headphones",
          description: "High-quality over-ear headphones with noise-cancellation and crisp sound.",
          storeId: 4,
          store_name: "Audio Emporium",
          store_address: "789 Sound Street",
          url: "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        // Add more items here...
      ];
      

      // const productsArr = products.map((product) => {
      //   return <PoductCard key={product.id} product={product}/>  
      // })

  return (
    <div className="mainGrid">
      <PoductCard product={products}/>
        {/* {productsArr} */}
    </div>
        
    
  );
}


export default ProductList;
