import { useEffect, useState } from "react"
const productsList = [
  { name: "Wireless Mouse", price: 25.99, category: "Electronics", sellerName: "TechWorld" },
  { name: "Bluetooth Headphones", price: 59.99, category: "Electronics", sellerName: "SoundHub" },
  { name: "Running Shoes", price: 75.0, category: "Footwear", sellerName: "Sportify" },
  { name: "Coffee Maker", price: 49.5, category: "Home Appliances", sellerName: "HomeEase" },
  { name: "Smartphone Case", price: 15.0, category: "Accessories", sellerName: "CasePoint" },
  { name: "Yoga Mat", price: 20.0, category: "Fitness", sellerName: "FitGear" },
  { name: "LED Desk Lamp", price: 30.0, category: "Home Decor", sellerName: "BrightHome" },
  { name: "Backpack", price: 40.0, category: "Bags & Accessories", sellerName: "TravelLite" },
  { name: "Gaming Keyboard", price: 85.0, category: "Electronics", sellerName: "TechWorld" },
  { name: "Stainless Steel Water Bottle", price: 18.5, category: "Kitchen & Dining", sellerName: "HydroStore" }
];

const Hooks = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState([])
  const [filterCategory, setfilterCategory] = useState("")
  const [sortCategory, setsortCategory] = useState("")
  //useEffect(function, [dependencies array])
  useEffect(() => {
    fetchProducts()
  }, [searchQuery, filterCategory,sortCategory])

  const fetchProducts = () => {
    const filteredProducts = productsList.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()) && product.category.toLowerCase().includes(filterCategory.toLowerCase()) && product.sort.toLowerCase().includes(sortCategory.toLowerCase()))
    setProducts(filteredProducts)
  }

  console.log(filterCategory);


  return (

    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      />

      <select onChange={(e) => {
        setfilterCategory(e.target.value);
      }} name="" id="">
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
        <option value="Footwear">Footwear</option>
        <option value="Home Appliances">Home Appliances</option>

      </select>


      <select onChange={(e) => {
        setsortCategory(e.target.value);
      }} name="" id="">
        <option value="">All</option>
        <option value="By Size">By Size</option>
        <option value="Ascending Order">Ascending Order</option>
        <option value="Descending Order">Descending Order</option>
        <option value="Home Date Modified">Date Modified</option>

      </select>


      {products.map((product, index) => (
        <div>
          {index + 1}
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
};



export default Hooks;