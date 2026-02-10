import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';


const Home = () => <h2> Home Page</h2>;
const About = () => <h2> About Us</h2>;
const Contact = () => <h2> Contact Me</h2>;
const NotFound = () => <h2 style={{color:'red'}}>404 - Page Not Found</h2>;

const ProductDetails = () => {
  const { id } = useParams(); 
  
  return (
    <div style={{ border: '1px solid blue', padding: '20px' }}>
      <h3>Product Details</h3>
      <p>You are viewing product ID: <strong>{id}</strong></p>
      <Link to="/products"> Back to List</Link>
    </div>
  );
};


const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Shoes" },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App1() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '15px', background: '#f0f0f0', marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/about" style={{ marginRight: '15px' }}>About</Link>
        <Link to="/contact" style={{ marginRight: '15px' }}>Contact</Link>
        <Link to="/products">Products</Link>
      </nav>

      <div style={{ padding: '0 20px' }}>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />


          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App1;